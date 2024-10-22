import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  schema: {
    "http://localhost:8080/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "APP-SECRET-DEVELOPMENT-LOCALHOST",
      },
    },
  },
  generates: {
    // Generate SDK for backend
    "./../hasura/src/gql/sdk.ts": {
      documents: ["./../../apps/backend/**/*.{gql,graphql}"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
    // For the Frontend
    "./../../apps/frontend/gql/operations.ts": {
      documents: ["./../../apps/frontend/**/*.{gql,graphql}"],
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    // SDK This is mostly for hasura-next-auth-adapter
    "./../../apps/frontend/gql/sdk.ts": {
      documents: ["./../../apps/frontend/**/*.{gql,graphql}"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        namingConvention: "keep",
      },
    },
  },
};

export default config;
