/**
 * This is a plugin for GraphQL
 * We use the client Villus
 */
import type { Client } from "graphql-ws";
import { createClient as createWsClient } from "graphql-ws";
import type { ClientPlugin } from "villus";
import { createClient, defaultPlugins, handleSubscriptions } from "villus";
import { logger as mainLogger } from "~/helpers/logger";

const logger = mainLogger.withTag("graphQlPlugin");

const makeSubscriptionForwarder = (wsUrl: string) => {
  let client: Client;

  return handleSubscriptions((operation) => {
    if (!client) {
      client = createWsClient({
        url: wsUrl,
        // You can add more configuration options here if needed
      });
    }

    return {
      subscribe: (observer) => {
        const dispose = client.subscribe(operation, {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });

        return {
          unsubscribe: dispose,
        };
      },
    };
  });
};

const makeHasuraUserAuthPlugin = (): ClientPlugin => {
  // Create our plugin that runs on each request
  return ({ opContext, afterQuery }) => {
    // Include next-auth cookies
    opContext.credentials = "include";

    // Handle issues
    afterQuery(async ({ error }, { response }) => {
      // if no response, then the fetch plugin failed with a fatal error
      if (!response) {
        return;
      }
      if (error) {
        // Check for specific authorization error codes or messages
        if (isAuthorizationError(error)) {
          // Log the error as a warning
          logger.warn("Authorization error:", error);

          // Trigger the logout process
          await useAuth().signOut();
        } else {
          // Handle other errors normally
          logger.error(error);
        }
      }
    });
  };
};

// Utility function to check if the error is related to authorization
function isAuthorizationError(error: any): boolean {
  logger.warn(error.graphqlErrors.map((x: any) => x.message));
  const authErrorCodes = ["x-hasura-role not found in session variables"];
  return error.graphqlErrors?.some((e: any) =>
    authErrorCodes.includes(e.message),
  );
}

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { graphqlUrl, graphqlWsUrl },
  } = useRuntimeConfig();
  const client = createClient({
    url: String(graphqlUrl),
    use: [
      makeHasuraUserAuthPlugin(),
      // Use webSockets if on the client
      ...(import.meta.client
        ? [makeSubscriptionForwarder(String(graphqlWsUrl))]
        : []),
      ...defaultPlugins(),
    ],
  });
  nuxtApp.vueApp.use(client);
});
