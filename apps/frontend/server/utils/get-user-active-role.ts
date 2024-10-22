import { Role_enum } from "~/gql/sdk";
import { makeClientAndSdk } from "~/server/utils/make-client";

/**
 * Get the current users active role.
 * The current user is the session user
 * The Role is a Role enum
 * @param id
 */
export async function getUserActiveRole(id: string) {
  const { sdk } = makeClientAndSdk();
  const userRolesResponse = await sdk.UserRoles({ id });
  const activeRole = userRolesResponse.user_by_pk?.activeRoles.map(
    (r) => r.role,
  )[0];
  return activeRole || Role_enum.public;
}

/**
 * Same as above only cached
 */
export const cachedGetUserActiveRole = cachedFunction<Role_enum, any[]>(
  async (id: string) => getUserActiveRole(id),
  {
    maxAge: 15,
    name: "getUserActiveRole",
    getKey: (id: string) => id,
  },
);
