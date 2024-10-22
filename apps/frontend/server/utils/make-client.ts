import { GraphQLClient } from "graphql-request";
import { getSdk } from "~/gql/sdk";

// Declaring a variable to hold our global GraphQL client. Initially, it's set to null.
let _globalClient: GraphQLClient | null = null;

/**
 * Initializes a new ADMIN instance of the GraphQL client if it doesn't exist, and returns it
 * along with the associated SDK. The client is configured with URL and headers fetched
 * from runtime configuration.
 *
 * @returns {object} - An object containing the client instance and its associated SDK.
 */
export function makeClientAndSdk() {
  // Get runtime configuration including the public GraphQL url and the application secret.
  const {
    public: { graphqlUrl },
    appSecret,
  } = useRuntimeConfig();

  // If the global client doesn't already exist, create a new instance of GraphQLClient.
  // The client is created with the URL obtained from runtime config and headers containing the application secret.
  _globalClient =
    _globalClient ||
    new GraphQLClient(String(graphqlUrl), {
      headers: {
        "x-hasura-admin-secret": appSecret,
      },
    });

  // Return the client instance along with its associated SDK.
  return { client: _globalClient, sdk: getSdk(_globalClient) };
}
