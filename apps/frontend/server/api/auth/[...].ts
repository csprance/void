import { NuxtAuthHandler } from "#auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "~/server/utils/cookie-config";
import sendVerificationRequest from "~/server/utils/email/send-verification";
import { cachedGetUserActiveRole } from "~/server/utils/get-user-active-role";
import { HasuraAdapter } from "~/server/utils/hasura-adapter";

export default NuxtAuthHandler({
  cookies,
  debug: true,
  secret: process.env.APP_SECRET,
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
    verifyRequest: "/auth/verify-request",
  },
  adapter: HasuraAdapter({
    endpoint: process.env.NUXT_PUBLIC_GRAPHQL_URL!,
    adminSecret: process.env.APP_SECRET!,
  }),
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    EmailProvider.default({
      allowDangerousEmailAccountLinking: true,
      sendVerificationRequest,
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  callbacks: {
    // Populate Session with our own info
    session: async ({ session, user }) => {
      if (session?.user) {
        // Add user ID to the session
        session.user.id = user.id;
        // Add the users active role
        session.user.role = String(await cachedGetUserActiveRole(user.id));
      }
      return session;
    },
  },
});
