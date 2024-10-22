import type { RenderOptions } from "@vue-email/compiler";
import type { AxiosResponse } from "axios";
import axios from "axios";
import fileSaver from "file-saver";
import type { SendMailOptions } from "nodemailer";
import { logger as mainLogger } from "~/helpers/logger";
import { NotificationTypes, useNotifyStore } from "~/stores/notify";

const logger = mainLogger.withTag("BackendApi");

export class BackendApi {
  public baseURL = String();
  private axios;

  constructor(url: string) {
    this.baseURL = url;
    this.axios = axios.create({
      baseURL: url,
      withCredentials: true,
    });
  }

  /**
   * Send an email based on the template name
   * @param name the name of the template
   * @param options the render/sendMail options
   */
  public async sendEmail(
    name: string,
    options: { send: SendMailOptions; render: RenderOptions },
  ) {
    console.log(name, options);
    return this.axios.post("/rest/mail/send", { name, options });
  }

  /**
   * Adds authorization token to the Axios instance.
   * @param appSecret the authorization token to be used in headers
   */
  public addAuthorization(appSecret: string) {
    this.axios.defaults.headers.common.AdminSecret = appSecret;
    return this;
  }

  public async getEmbeddings(prompt: string) {
    return this.axios.post("/rest/embeddings", { prompt });
  }
}
