import { Configuration } from "@tsed/di";
import cookieParser from "cookie-parser";
import { readFileSync } from "fs";
import process from "node:process";
import Path, { join } from "path";
import { getTempDir, isProd } from "~/lib/util";

import * as pages from "../controllers/pages";
import * as rest from "../controllers/rest";
import cleanEnvs, { isProduction } from "./envs";
import loggerConfig from "./logger/index";

const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));
const rootDir = Path.resolve(__dirname);
const domainWhitelist = [
  cleanEnvs.BASE_URL,
  cleanEnvs.NUXT_PUBLIC_GRAPHQL_URL,
  cleanEnvs.NUXT_PUBLIC_BACKEND_URL,
];

export const config: Partial<Configuration> = {
  hasura: {
    appSecret: cleanEnvs.APP_SECRET,
    url: isProd() ? "http://hasura:8080" : "http://localhost:8080",
  },
  version: pkg.version,
  logger: loggerConfig,
  // additional shared configuration
  exclude: ["**/*.spec.ts"],
  uploadDir: `${rootDir}/custom-dir`,
  multer: {
    dest: getTempDir(),
  },
  acceptMimes: ["application/json"],
  cache: {
    ttl: 300, // default TTL
    store: "memory",
    // options depending on the chosen storage type
  },
  httpPort: cleanEnvs.BACKEND_PORT || 1337,
  httpsPort: false, // We do ssl through traefik so only http
  disableComponentsScan: true,
  middlewares: [
    {
      use: "cors",
      options: {
        credentials: true,
        origin: function (origin: any, callback: any) {
          if (domainWhitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
          } else {
            callback(new Error("Domain not allowed by CORS"));
          }
        },
      },
    },
    "compression",
    "method-override",
    { use: "json-parser" },
    { use: "urlencoded-parser", options: { extended: true } },
    cookieParser(),
  ],
  mount: {
    "/rest": [...Object.values(rest)],
    "/": [...Object.values(pages)],
  },
  // Show swagger only on dev
  swagger: isProduction
    ? []
    : [
        {
          path: "/doc",
          specVersion: "3.0.1",
        },
      ],
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs",
    },
  },
  terminus: {
    path: "/healthcheckz",
  },
  bullmq: {
    // Define queue names.
    connection: {
      host: isProd() ? "redis" : "localhost",
    },
    defaultQueueOptions: {
      // Default queue options which are applied to every queue
      // Can be extended/overridden by `queueOptions`
    },
    queueOptions: {
      // Specify additional queue options by queue name
    },
    // Disable the creation of any worker.
    // All other worker configuration will be ignored
    // disableWorker: true,
    // Specify for which queues to start a worker for.
    // When undefined falls back to all queues specified.
    workerQueues: ["ml"],
    defaultWorkerOptions: {
      // Default worker options which are applied to every worker
      // Can be extended/overridden by `workerOptions`
    },
    workerOptions: {
      // Specify additional worker options by queue name
      ml: {
        concurrency: 1,
        removeOnComplete: { count: 100 },
      },
    },
  },
};
