import { Controller } from "@tsed/di";
import { Description, Post } from "@tsed/schema";
import { version } from "~/../package.json";
import { Roles, useSessionAuth } from "~/middlewares/SessionAuthMiddleware";

@Controller("/hasura/actions/backend_version")
@Description("Get The version of the backend")
@useSessionAuth({ role: Roles.SUPER_ADMIN })
export class BackendVersionCtrl {
  @Post("/")
  async getVersion(): Promise<{ version: string }> {
    return { version };
  }
}
