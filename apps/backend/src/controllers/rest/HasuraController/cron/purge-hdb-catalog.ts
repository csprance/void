import { Req } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { Description, Post, Tags } from "@tsed/schema";
import { HasuraService } from "@void/hasura";
import { Roles, useSessionAuth } from "~/middlewares/SessionAuthMiddleware";

@Controller("/hasura/cron/purge-hdb-catalog")
@Description(
  "Cleanup HDB Logs older than 3 months " +
    "https://hasura.io/docs/latest/actions/logs-clean-up/#clearing-data-before-a-particular-time-period",
)
@useSessionAuth({ role: Roles.SUPER_ADMIN })
export class PurgeHdbCatalog {
  @Inject() logger: Logger;
  @Inject() hasura: HasuraService;

  @Post("/")
  async purgeHdbCatalog(@Req() req: Req) {
    return this.hasura.sql(
      `DELETE FROM hdb_catalog.hdb_action_log WHERE created_at < NOW() - INTERVAL '3 months';`,
    );
  }
}
