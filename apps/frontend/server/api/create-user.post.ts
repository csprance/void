import { getServerSession } from "#auth";
import { GraphQLClient } from "graphql-request";
// @ts-ignore
import type { AdapterUser } from "next-auth/adapters";
import { getSdk } from "~/gql/sdk";
import { BackendApi } from "~/helpers/BackendApi";
import { isManagerRole } from "~/helpers/auth";
import { HasuraAdapter } from "~/server/utils/hasura-adapter";

const adapter = HasuraAdapter({
  endpoint: process.env.NUXT_PUBLIC_GRAPHQL_URL!,
  adminSecret: process.env.APP_SECRET!,
});
const client = new GraphQLClient(process.env.NUXT_PUBLIC_GRAPHQL_URL!, {
  headers: {
    "x-hasura-admin-secret": process.env.APP_SECRET!,
  },
});
const sdk = getSdk(client);
/**
 * Body:
 *  name: The name of a new user
 *  email: The email of the user
 *  role: The string role of the user
 */
export default eventHandler(async (event) => {
  // Check if there is a session and the user is at least a manager
  const session = await getServerSession(event);

  if (!session || !isManagerRole(session.user?.role!)) {
    throw createError({ statusMessage: "Unauthenticated", statusCode: 403 });
  }
  const {
    appSecret,
    public: { backendUrl },
  } = useRuntimeConfig();
  const $backend = new BackendApi(String(backendUrl)).addAuthorization(
    appSecret,
  );

  // Read the body data
  const { name, email, role, credits } = await readBody(event);

  // Create and return the user
  const user: AdapterUser = await adapter.createUser({
    email,
    name: email,
  });

  // Update the users role
  await sdk.UpdateUserRoles({
    user_id: user.id,
    user_roles: [
      {
        role,
        active: true,
        user_id: user.id,
      },
    ],
  });

  // Add credits to user
  await sdk.AddCreditsToUser({
    user_id: user.id,
    num_credits: credits,
  });

  // Send the welcome email
  await $backend.sendEmail("welcome.vue", {
    send: {
      to: email,
      subject: "Welcome to VOID",
    },
    render: {
      props: {
        username: email,
      },
    },
  });

  // Return the user
  return sdk.GetUser({
    id: user.id,
  });
});
