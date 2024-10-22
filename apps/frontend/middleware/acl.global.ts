import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { Role_Enum } from "~/gql/operations";
import type { PageACLRoles } from "~/helpers/acl";
import { getRoleValue } from "~/helpers/acl";
import { logger as mainLogger } from "~/helpers/logger";

const logger = mainLogger.withTag("aclMiddleware");

export default defineNuxtRouteMiddleware((to, from) => {
  const { currentUser } = useAppStore();
  const noAccessPage = "/no-access";
  const { acl } = to.meta;
  if (!acl) {
    // No ACL at all be silent and carry on
    return;
  }
  const allowedRoles: PageACLRoles = (acl as any).roles;

  if (!allowedRoles) {
    logger.trace(
      "No specific roles defined for this page, access granted to everyone.",
    );
    return;
  }

  const userRoleValue = currentUser?.role ? getRoleValue(currentUser?.role) : 0;
  logger.info(currentUser);

  // Find the minimum role value required to access the page
  const minRoleValueRequired = Math.min(
    ...allowedRoles.map((role) => getRoleValue(role.role)),
  );

  // If the user's role value is less than the minimum required, redirect to no-access
  if (userRoleValue < minRoleValueRequired) {
    logger.info(
      `User role [${currentUser?.role}] is not authorized, redirecting to no-access page.`,
    );
    return navigateTo(noAccessPage);
  }

  // If a 'check' function is provided for the user's role, execute it to determine further access
  const userRoleEntry = allowedRoles.find(
    (r) => getRoleValue(r.role) === userRoleValue,
  );
  if (
    userRoleEntry?.check &&
    !userRoleEntry.check({ currentUser: currentUser!, to, from })
  ) {
    logger.info(
      `Role check for [${currentUser?.role}] failed, redirecting to no-access page.`,
    );
    return navigateTo(noAccessPage);
  }

  // Log access for super admins
  if (currentUser?.role === Role_Enum.SuperAdmin) {
    logger.info("SuperAdmin accessed a page, logging...");
    // Implement logging logic here
  }

  logger.trace(`Access granted to user with role [${currentUser?.role}].`);
});
