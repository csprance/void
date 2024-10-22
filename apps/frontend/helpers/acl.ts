// Helper function to create ACL meta configuration
import type { DefaultUser } from "next-auth";
import type { RouteLocationNormalizedLoaded, RouteMeta } from "vue-router";
import { Role_Enum } from "~/gql/operations";

interface CheckFuncArgs {
  currentUser: DefaultUser;
  to: RouteLocationNormalizedLoaded;
  from: RouteLocationNormalizedLoaded;
}

export interface ACLRoles {
  role: Role_Enum | string;
  check?: (args: CheckFuncArgs) => boolean;
}

// Extend the default RouteMeta interface to include ACL roles
interface ACLRouteMeta extends RouteMeta {
  acl?: {
    roles: ACLRoles[];
  };
}

export type PageACLRoles = ACLRoles[] | undefined;

export function createAclMeta(roles: ACLRoles[]): ACLRouteMeta {
  return {
    roles,
  };
}

/**
 * By default, at least all pages should have this acl to allow
 * users and above and block public (non verified user)
 */
export function defaultAcl() {
  return createAclMeta([{ role: Role_Enum.User }]);
}

// Helper function to convert a string to a Role_Enum if possible
function toRoleEnum(roleStr: string): Role_Enum | null {
  const matchingEntry = Object.entries(Role_Enum).find(
    ([key, val]) => val === roleStr,
  );
  return matchingEntry
    ? Role_Enum[matchingEntry[0] as keyof typeof Role_Enum]
    : null;
}

// Updated getRoleValue function to accept string | Role_Enum
export function getRoleValue(role: string | Role_Enum): number {
  // Convert to Role_Enum if role is a string
  if (typeof role === "string") {
    const roleEnum = toRoleEnum(role);
    if (roleEnum === null) {
      return 0; // Unknown role string
    }
    role = roleEnum;
  }

  switch (role) {
    case Role_Enum.Public:
      return 1;
    case Role_Enum.User:
      return 2;
    case Role_Enum.Manager:
      return 3;
    case Role_Enum.Admin:
      return 4;
    case Role_Enum.SuperAdmin:
      return 5;
    default:
      return 0; // This case now handles unexpected enum values
  }
}

/**
 * Checks if a user's role is sufficient to perform an action that requires a certain role.
 *
 * @param userRole - The current role of the user.
 * @param requiredRole - The required role to perform the action.
 * @returns true if the user's role is sufficient, false otherwise.
 */
export function canPerformAction(
  userRole: Role_Enum | string,
  requiredRole: Role_Enum | string,
): boolean {
  const userRoleValue = getRoleValue(userRole);
  const requiredRoleValue = getRoleValue(requiredRole);

  return userRoleValue >= requiredRoleValue;
}
