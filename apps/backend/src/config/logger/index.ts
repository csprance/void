import { $log, DILoggerOptions } from "@tsed/common";
import "@tsed/logger-file";
import { getDataDir } from "~/lib/util";

import { isProduction } from "../envs";

$log.appenders.set("everything", {
  type: "file",
  filename: `${getDataDir()}/logs/backend.log`,
  maxLogSize: 10485761,
  backups: 3,
  compress: true,
});

export default <DILoggerOptions>{
  debug: true,
  disableRoutesSummary: isProduction,
  level: "debug",
  logRequest: false,
  ignoreUrlPatterns: ["/rest/*"],
};
