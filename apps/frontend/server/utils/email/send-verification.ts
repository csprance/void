// @ts-ignore
import type { SendVerificationRequestParams } from "next-auth/src/providers/email";
import { BackendApi } from "~/helpers/BackendApi";
import { logger as mainLogger } from "~/helpers/logger";

const logger = mainLogger.withTag("sendVerificationEmail");

export default async function sendVerificationEmail({
  url,
  identifier,
}: SendVerificationRequestParams) {
  logger.info(
    `Sending Verification Email to: ${identifier} ${String(process.env.NUXT_PUBLIC_BACKEND_URL)}`,
  );
  const api = new BackendApi(
    String(process.env.NUXT_PUBLIC_BACKEND_URL),
  ).addAuthorization(String(process.env.APP_SECRET));

  const result = await api.sendEmail("login.vue", {
    render: {
      props: {
        url,
      },
    },
    send: {
      to: identifier,
      subject: "Login to VOID",
    },
  });

  if (!result) {
    throw new Error(`Email(s) could not be sent) `);
  }
  logger.error(result);

  return result;
}
