import { cleanEnv, port, str, url } from "envalid";

export const isProduction = process.env.NODE_ENV === "production";

export const envs = {
  ...process.env,
};

// Define your environment variables and their types
const envSchema = {
  APP_SECRET: str(),
  BASE_URL: url(),
  BACKEND_PORT: port(),
  NODE_ENV: str({
    choices: ["production", "dev", "test"],
    default: "dev",
  }),
  NUXT_PUBLIC_GRAPHQL_URL: str(),
  NUXT_PUBLIC_BACKEND_URL: str(),
  SMTP_HOST: str(),
  SMTP_PORT: port(),
  SMTP_USER: str(),
  SMTP_PASSWORD: str(),
  LOG_LEVEL: str({
    choices: ["trace", "debug", "info", "warn", "error", "fatal", "all"],
    default: "trace",
  }),
};

// Ensure the environment variables are valid
const cleanEnvs = cleanEnv(envs, envSchema);

export default cleanEnvs;
