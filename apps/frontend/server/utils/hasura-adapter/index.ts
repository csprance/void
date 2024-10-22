import { GraphQLClient } from "graphql-request";
import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken, // @ts-ignore
} from "next-auth/adapters";
import { getSdk } from "~/gql/sdk";

type HasuraAdapterArgs = {
  endpoint: string;
  adminSecret: string;
};

const transformDate = <T extends { [key: string]: unknown }>(
  object: T | null | undefined,
  key: keyof T,
) => {
  if (!object) return;

  if (object[key]) {
    return {
      ...object,
      [key]: new Date(object[key] as string),
    };
  }

  return object;
};

export const HasuraAdapter = ({
  endpoint,
  adminSecret,
}: HasuraAdapterArgs): Adapter => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      "x-hasura-admin-secret": adminSecret,
    },
  });
  const sdk = getSdk(client);

  return {
    // User
    createUser: async (data: any) => {
      // Create a user and make a thumbnail if they don't have one
      const { name, image, ..._data } = {
        ...data,
        username: data.name ? data.name : data.email, // If No name use the email instead
        avatar: data.image
          ? data.image
          : // Use a fun default thumb
            `https://api.dicebear.com/6.x/thumbs/svg?seed=${data.email}`,
      } as any;

      const res = await sdk.CreateUser({
        data: {
          ..._data,
        },
      });
      await sdk.CreatePublicRole({ user_id: res.insert_user_one?.id });
      const user = transformDate(res?.insert_user_one, "emailVerified");

      return user as AdapterUser;
    },
    getUser: async (id: string) => {
      const res = await sdk.GetUser({ id });
      const user = transformDate(res?.user_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    getUserByEmail: async (email: string) => {
      const res = await sdk.GetUsers({ where: { email: { _eq: email } } });
      const user = transformDate(res?.user?.[0], "emailVerified");

      if (!user) return null;

      return user as AdapterUser;
    },
    getUserByAccount: async ({ providerAccountId, provider }: any) => {
      const res = await sdk.GetUsers({
        where: {
          accounts: {
            provider: { _eq: provider },
            providerAccountId: { _eq: providerAccountId },
          },
        },
      });
      const user = transformDate(res?.user?.[0], "emailVerified");

      if (!user) return null;

      return { ...user, name: user.username } as AdapterUser;
    },
    updateUser: async ({ id, ...data }: any) => {
      const res = await sdk.UpdateUser({ id, data });
      const user = transformDate(res?.update_user_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    deleteUser: async (id: string) => {
      const res = await sdk.DeleteUser({ id });
      const user = transformDate(res?.delete_user_by_pk, "emailVerified");

      return user as AdapterUser;
    },
    // Session
    createSession: async (data: any) => {
      const res = await sdk.CreateSession({ data });
      const session = transformDate(res?.insert_sessions_one, "expires");

      return session as AdapterSession;
    },
    getSessionAndUser: async (sessionToken: string) => {
      const res = await sdk.GetSession({ sessionToken });
      const session = transformDate(res?.sessions?.[0], "expires");
      const user = transformDate(session?.user, "emailVerified");

      return {
        session: session as AdapterSession,
        user: user as AdapterUser,
      };
    },
    updateSession: async ({ sessionToken, ...data }: any) => {
      const res = await sdk.UpdateSession({ sessionToken, data });
      const session = transformDate(
        res?.update_sessions?.returning?.[0],
        "expires",
      );

      if (!session) return null;

      return session as AdapterSession;
    },
    deleteSession: async (sessionToken: string) => {
      const res = await sdk.DeleteSession({ sessionToken });
      const session = transformDate(
        res?.delete_sessions?.returning?.[0],
        "expires",
      );

      if (!session) return null;

      return session as AdapterSession;
    },
    // Account
    linkAccount: async (data: any) => {
      const res = await sdk.CreateAccount({ data });
      const account = res?.insert_accounts_one;

      return account as AdapterAccount;
    },
    unlinkAccount: async ({ providerAccountId, provider }: any) => {
      const res = await sdk.DeleteAccount({ provider, providerAccountId });
      const account = res?.delete_accounts?.returning?.[0];

      if (!account) return;

      return account as AdapterAccount;
    },
    // Verification Token
    createVerificationToken: async (data: any) => {
      const res = await sdk.CreateVerificationToken({ data });
      const verificationToken = transformDate(
        res?.insert_verification_tokens_one,
        "expires",
      );

      return verificationToken as VerificationToken;
    },
    useVerificationToken: async ({ identifier, token }: any) => {
      const res = await sdk.DeleteVerificationToken({ identifier, token });
      const verificationToken = transformDate(
        res?.delete_verification_tokens?.returning?.[0],
        "expires",
      );

      if (!verificationToken) return null;

      return verificationToken as VerificationToken;
    },
  };
};
