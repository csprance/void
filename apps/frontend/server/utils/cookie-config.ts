import type { CookieSerializeOptions } from "cookie-es";
import type { CookiesOptions } from "next-auth";
import { parse } from "tldts";
import { isProd } from "~/server/utils/index";

export const options: CookieSerializeOptions = {
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  // make sure it's set to true in production
  secure: Boolean(isProd),
  // need url like .void-app.org, so we can use subdomains
  domain: `.${parse(String(process.env.BASE_URL)).domain}`,
};

// https://next-auth.js.org/configuration/options#cookies
// We only do this in PROD because defaults are fine in dev
export const cookies: Partial<CookiesOptions> = isProd
  ? {
      sessionToken: {
        name: `__Secure-next-auth.session-token`,
        options,
      },
      callbackUrl: {
        name: `__Secure-next-auth.callback-url`,
        options,
      },
      csrfToken: {
        name: `__Secure-next-auth.csrf-token`,
        options,
      },
    }
  : {};
