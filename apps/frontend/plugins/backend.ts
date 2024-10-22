import { useRuntimeConfig } from "#app";
import { BackendApi } from "~/helpers/BackendApi";

export default defineNuxtPlugin((nuxtApp) => {
  const { backendUrl } = useRuntimeConfig().public;
  return {
    provide: {
      backend: new BackendApi(String(backendUrl)),
    },
  };
});
