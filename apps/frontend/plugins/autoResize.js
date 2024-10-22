export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("autoResize", {
    mounted(el) {
      el.style.overflow = "hidden";
      el.style.resize = "none";

      // Set initial height
      setHeight(el);

      // Event listener to adjust height on input
      const onInput = () => setHeight(el);
      el.addEventListener("input", onInput);

      // Event listener for window resize
      const onResize = () => setHeight(el);
      window.addEventListener("resize", onResize);

      // Store the event listeners for later reference
      el._onInput = onInput;
      el._onResize = onResize;
    },
    unmounted(el) {
      // Remove event listeners
      if (el._onInput) {
        el.removeEventListener("input", el._onInput);
      }
      if (el._onResize) {
        window.removeEventListener("resize", el._onResize);
      }
    },
  });
});

// Function to adjust textarea height
function setHeight(el) {
  el.style.height = "auto"; // Reset height to get the correct scrollHeight
  el.style.height = el.scrollHeight + "px";
}
