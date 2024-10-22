import { useDecorators } from "@tsed/core";
import { Inject } from "@tsed/di";
import { Forbidden, Unauthorized } from "@tsed/exceptions";
import { Logger } from "@tsed/logger";
import {
  Middleware,
  MiddlewareMethods,
  UseAuth,
} from "@tsed/platform-middlewares";
import { Context, Cookies } from "@tsed/platform-params";
import { Returns } from "@tsed/schema";
import { HasuraService } from "@void/hasura";
import cleanEnvs from "~/config/envs";
import { SYSTEM_USER_UUID, superAdminUser } from "~/lib/constants";
import { getNextAuthCookiesSessionTokenName, transformDate } from "~/lib/util";

export enum Roles {
  // Everyone starts as public
  PUBLIC = "public",
  // This is the base user role
  USER = "user",
  // This is what a manager would be. They can do most things
  MANAGER = "manager",
  // You can do everything but core system actions
  ADMIN = "admin",
  // This is the super admin and everytime it's used it's logged
  SUPER_ADMIN = "superAdmin",
}

export const RoleLevels: Record<Roles, number> = {
  [Roles.PUBLIC]: 1,
  [Roles.USER]: 2,
  [Roles.MANAGER]: 3,
  [Roles.ADMIN]: 4,
  [Roles.SUPER_ADMIN]: 5,
};

export interface SessionAuthOptions extends Record<string, unknown> {
  role: Roles;
  scopes?: string[];
}

/**
 * Function decorator to apply session-based authentication.
 *
 * @param {SessionAuthOptions} options - Options for session authentication. Default is { role: Roles.USER }.
 * @returns {Function} - A decorator function that applies authentication middleware and defines possible return values for unauthorized and forbidden requests.
 */
export function useSessionAuth(
  options: SessionAuthOptions = { role: Roles.USER },
): (...args: any[]) => any {
  return useDecorators(
    UseAuth(SessionAuthMiddleware, options),
    Returns(401),
    Returns(403),
  );
}

/**
 * Middleware class to handle session-based authentication.
 */
@Middleware()
export class SessionAuthMiddleware implements MiddlewareMethods {
  @Inject(Logger) protected logger: Logger;
  @Inject(HasuraService) hasura: HasuraService;

  /**
   * Middleware function to execute on requests. Validates the session and role.
   *
   * @param {Context} ctx - Request context.
   * @param {any} cookies - Cookies from the request.
   * @returns {Promise<any>} - User data if authentication passes, otherwise throws an error.
   */
  async use(@Context() ctx: Context, @Cookies() cookies: any): Promise<any> {
    this.logger.trace("SessionAuthMiddleware", cookies);
    const options: SessionAuthOptions =
      ctx.endpoint.get(SessionAuthMiddleware) || {};
    // If we're super Admin allow the request through
    if (this.checkSuperAdmin(ctx, options)) return;
    // If not decode and check the user roles
    return this.checkUserRoles(ctx, options, cookies);
  }

  /**
   * Checks if the request is made by a super admin. Logs the action if true.
   *
   * @param {Context} ctx - Request context.
   * @param {SessionAuthOptions} options - Session authentication options.
   * @returns {boolean} - Returns true if super admin, false otherwise.
   */
  private checkSuperAdmin(ctx: Context, options: SessionAuthOptions): boolean {
    const isSuperAdmin =
      ctx.request.headers["adminsecret"] === cleanEnvs.APP_SECRET;
    if (isSuperAdmin) {
      const forwardedUser =
        ctx.request.body.event?.session_variables?.["x-hasura-user-id"];
      const userUuid = forwardedUser
        ? forwardedUser
        : ctx.request.headers["x-user-uuid"]
          ? (ctx.request.headers["x-user-uuid"] as string)
          : SYSTEM_USER_UUID;
      const user = userUuid
        ? { ...superAdminUser, id: userUuid }
        : superAdminUser;
      ctx.set("user", user);
      return true;
    }
    return false;
  }

  /**
   * Retrieves session data from the server. Extracts the session token from the cookies
   * and then retrieves the session data from the database.
   *
   * @param {any} incomingCookies - Cookies from the request.
   * @returns {Promise<{session: any, user: any}>} - The session and user data.
   * @throws {Unauthorized} - If no session token is found in the cookies.
   */
  async getServerSession(
    incomingCookies: any,
  ): Promise<{ session: any; user: any }> {
    // Extract the session token from the incoming cookies
    const sessionToken = incomingCookies[getNextAuthCookiesSessionTokenName()];

    if (!sessionToken) {
      throw new Unauthorized("No session token found in cookies");
    }

    return this.getDbSession(sessionToken);
  }

  /**
   * Retrieves session data from the database. This function is cached for performance.
   *
   * @param {string} sessionToken - The session token.
   * @returns {Promise<{session: any, user: any}>} - The session and user data.
   */
  private async getDbSession(
    sessionToken: string,
  ): Promise<{ session: any; user: any }> {
    const res = await this.hasura.sdk.GetSession({ sessionToken });
    const session = transformDate(res?.sessions?.[0], "expires");
    const user = transformDate(session?.user, "emailVerified");

    return {
      session,
      user,
    };
  }

  /**
   * Checks if the user's roles meet the required level for the request.
   *
   * @param {Context} ctx - Request context.
   * @param {SessionAuthOptions} options - Session authentication options.
   * @param {any} cookies - Cookies from the request.
   * @returns {Promise<any>} - User data if role level is met, otherwise throws a forbidden error.
   */
  private async checkUserRoles(
    ctx: Context,
    options: SessionAuthOptions,
    cookies: any,
  ): Promise<any> {
    const { user, session } = await this.getServerSession(cookies);
    // TODO: Check expires?
    const roles: Roles[] = user?.user_roles.map((r: any) => r.role) ?? [];
    if (!roles.some((role) => RoleLevels[role] >= RoleLevels[options.role])) {
      throw new Forbidden(
        "You Do not have permission to do this. Please contact your manager",
      );
    }
    ctx.set("user", user);
    return user;
  }
}
