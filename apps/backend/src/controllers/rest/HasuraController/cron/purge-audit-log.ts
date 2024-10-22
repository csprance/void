import { Req } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { Description, Post } from "@tsed/schema";
import { HasuraService } from "@void/hasura";
import { Roles, useSessionAuth } from "~/middlewares/SessionAuthMiddleware";

@Controller("/hasura/cron/purge-audit-log")
@Description("Hasura Cron Trigger to clean up audit logs older than 3 months")
@useSessionAuth({ role: Roles.SUPER_ADMIN })
export class PurgeAuditLogCtrl {
  @Inject() logger: Logger;
  @Inject() hasura: HasuraService;

  @Post("/")
  async purgeAuditLog(@Req() req: Req) {
    return this.hasura.sql(
      `DELETE FROM audit.logged_actions WHERE action_tstamp_tx < NOW() - INTERVAL '3 months';`,
    );
  }
}
