export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      el.focus();

      // Check if the element is a textarea or input field
      if (
        el.tagName === "TEXTAREA" ||
        (el.tagName === "INPUT" &&
          ["text", "password", "email", "number"].includes(el.type))
      ) {
        // Select the text inside the element
        el.select();
      }
    },
  });
});
