import Multiselect from "vue-multiselect";

export default defineNuxtPlugin(async (nuxtApp) => {
  // register globally
  nuxtApp.vueApp.component("multiselect", Multiselect);
});
