// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/test-utils/module",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    "@formkit/nuxt",
    "floating-vue/nuxt",
    "@vue-email/nuxt",
    "@nuxtjs/mdc",
    "@nuxt/image",
    "@nuxt/eslint",
  ],

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      ],
    },
  },

  auth: {
    baseURL: process.env.BASE_URL,
    provider: {
      type: "authjs",
      trustHost: true,
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },

  css: ["@/assets/css/tailwind.css", "@/assets/css/markdown.css"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  nitro: {
    logLevel: 5,
  },

  vueEmail: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? process.env.BASE_URL
        : "http://localhost:3000/",
    autoImport: true,
  },

  runtimeConfig: {
    appSecret: process.env.APP_SECRET,
    webhookUrl: process.env.DISCORD_LOGGING_WEBHOOK_URL,
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    public: {
      nodeEnv: process.env.NODE_ENV,
      baseURL: process.env.BASE_URL,
      docsUrl: process.env.NUXT_PUBLIC_DOCS_URL,
      backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL,
      graphqlUrl: process.env.NUXT_PUBLIC_GRAPHQL_URL,
      graphqlWsUrl: process.env.NUXT_PUBLIC_GRAPHQL_WS_URL,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },

  compatibilityDate: "2024-07-03",
});
