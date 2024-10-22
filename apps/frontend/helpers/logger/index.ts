import { consola } from "consola";

const isDev = process.env.NODE_ENV !== "production";

// Adding our customer reporter to Consola for void

export const logger = consola.create({
  // We only log debug in dev otherwise we log info and above
  // Set to 5 if you want trace
  level: isDev ? 4 : 3,
});
