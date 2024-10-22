import { Role_Enum } from "~/gql/operations";

export function getCurrentUser() {
  const { status, data } = useAuth();
  if (status.value !== "authenticated") {
    return {
      id: "no-no",
      name: "Anonymous Rex",
      email: "anon@anon.org",
      image: "",
      role: Role_Enum.Public,
    };
  }
  return data.value?.user!;
}

export const signinErrors = {
  OAuthSignin: "Error in constructing an authorization URL",
  OAuthCallback: "Error in handling the response from an OAuth provider",
  OAuthCreateAccount: "Could not create OAuth provider user in the database",
  EmailCreateAccount: "Could not create email provider user in the database",
  Callback: "Error in the OAuth callback handler route",
  OAuthAccountNotLinked:
    "The email on the account is already linked, but not with this OAuth account",
  EmailSignin: "Sending the e-mail with the verification token failed",
  CredentialsSignin:
    "The authorize callback returned null in the Credentials provider.",
  SessionRequired:
    "The content of this page requires you to be signed in at all times",
};

/**
 * Check a role to see if it is a manager or above
 * @param role the role to test
 */
export const isManagerRole = (role: Role_Enum | string) =>
  [
    String(Role_Enum.Manager),
    String(Role_Enum.Admin),
    String(Role_Enum.SuperAdmin),
  ].includes(role);
