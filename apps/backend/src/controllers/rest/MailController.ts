import { BodyParams, Controller } from "@tsed/common";
import { Inject } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { Description, Example, Post } from "@tsed/schema";
import { RenderOptions } from "@vue-email/compiler";
import { SendMailOptions } from "nodemailer";
import { Roles, useSessionAuth } from "~/middlewares/SessionAuthMiddleware";
import { MailService } from "~/services/MailService";

@Controller("/mail")
export class MailController {
  @Inject()
  private logger: Logger;

  @Inject()
  private mailService: MailService;

  @Post("/send")
  @Description(
    `Compile and send an email template with some data to an address. 
    Uses emails created on the frontend vue-email`,
  )
  @useSessionAuth({ role: Roles.SUPER_ADMIN })
  async sendEmail(
    @BodyParams("name")
    @Description("The name of the Vue email template to render")
    @Example("asset-ingest-batch.vue")
    name: string,

    @BodyParams("options")
    @Description("The props to inject into the template")
    @Example('{"url": "www.google.com"}')
    options: { send: SendMailOptions; render: RenderOptions },
  ) {
    this.logger.info("Sending Email");
    return this.mailService.sendEmail(name, options);
  }
}
