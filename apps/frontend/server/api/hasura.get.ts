import type { H3Event } from "h3";
import { logger as mainLogger } from "~/helpers/logger";

const logger = mainLogger.withTag("hasura.get");

/**
 * We need this function because the cookie changes whether we're in prod or not
 * because we're using secure cookies
 */
export function getNextAuthCookiesSessionTokenName() {
  const cookiePrefix = isProd ? "__Secure-" : "";
  return `${cookiePrefix}next-auth.session-token`;
}

const cachedGetSession = cachedFunction(
  async (sessionToken: string, event: H3Event) => {
    const session: any = await $fetch("/api/auth/session", {
      headers: getHeaders(event) as HeadersInit,
    });
    if (session) {
      // console.log("[hasura.get.ts]", JSON.stringify({ session }));
      // If session exists, grab the role and user id for hasura and pass it on
      return {
        "x-hasura-role": session?.user?.role,
        "x-hasura-user-id": session?.user?.id,
      };
    }
  },
  {
    maxAge: 15,
    name: "getServerSession-cached",
    getKey: (token: string, event: H3Event) => token,
  },
);

/**
 * Based on the user session set the user id and user role for the user
 * This calls a function that is cached for 120
 */
export default eventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);
    const token = cookies[getNextAuthCookiesSessionTokenName()];
    const sessionData = await cachedGetSession(token, event);
    logger.trace("[hasura.get.ts] - ", sessionData);
    return sessionData;
  } catch (e) {
    logger.error("[ERROR][hasura.get.ts]", JSON.stringify(e));
  }
  return { "X-Hasura-Role": "anonymous" };
});
