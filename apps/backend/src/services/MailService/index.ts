import { Inject, Service } from "@tsed/di";
import { Logger } from "@tsed/logger";
import { RenderOptions, config } from "@vue-email/compiler";
import { SendMailOptions, createTransport } from "nodemailer";

import cleanEnvs from "../../config/envs";

@Service()
export class MailService {
  @Inject() private logger: Logger;

  /**
   * We use this to render our Vue Emails we create in frontend/emails
   */
  private vueEmail = config(
    cleanEnvs.isProd ? "/app/emails" : "../frontend/emails",
    {
      verbose: true,
      options: {
        baseUrl: cleanEnvs.BASE_URL,
      },
    },
  );

  public async sendEmail(
    name: string,
    options: { send: SendMailOptions; render: RenderOptions },
  ) {
    const { SMTP_PASSWORD, SMTP_HOST, SMTP_USER, SMTP_PORT } = cleanEnvs;
    const transport = createTransport({
      host: SMTP_HOST,
      auth: {
        pass: SMTP_PASSWORD,
        user: SMTP_USER,
      },
      port: SMTP_PORT,
    });
    const from = `Void Framework <VOID@${new URL(cleanEnvs.BASE_URL).hostname}>`;
    const { html, text } = await this.vueEmail.render(name, options.render);
    const emailArgs = {
      ...options.send,
      from,
      html,
      text,
    };
    this.logger.debug(emailArgs);
    return transport.sendMail(emailArgs);
  }
}
