import { Req } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { Description, Post } from "@tsed/schema";
import { HasuraEventTriggerPayload, Role_Enum } from "@void/hasura";
import { Roles, useSessionAuth } from "~/middlewares/SessionAuthMiddleware";

@Controller("/hasura/events/user")
@Description("Event trigger on user table change.")
@useSessionAuth({ role: Roles.SUPER_ADMIN })
export class UserEventTriggerController {
  @Inject() private logger: Logger;

  @Post("/")
  async user(@Req() req: Request) {
    const data: HasuraEventTriggerPayload = req.body as any;

    switch (data.event.op) {
      case "INSERT":
        break;
      case "UPDATE":
        // Send the user an email about what they updated
        break;
      case "DELETE":
        // Say goodbye
        break;
      case "MANUAL":
        break;
    }
  }
}
