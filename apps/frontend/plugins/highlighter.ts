import hljs from "highlight.js/lib/core";
import c from "highlight.js/lib/languages/c";
import glsl from "highlight.js/lib/languages/glsl";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import plaintext from "highlight.js/lib/languages/plaintext";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import typescript from "highlight.js/lib/languages/typescript";
import yaml from "highlight.js/lib/languages/yaml";
// import "highlight.js/styles/an-old-hope.css";
// import "highlight.js/styles/color-brewer.min.css";
import "highlight.js/styles/night-owl.min.css";

export default defineNuxtPlugin(async (nuxtApp) => {
  // Then register the languages you need
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("c", c);
  hljs.registerLanguage("rust", rust);
  hljs.registerLanguage("python", python);
  hljs.registerLanguage("glsl", glsl);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("yaml", yaml);
  hljs.registerLanguage("markdown", markdown);
  hljs.registerLanguage("plaintext", plaintext);
  nuxtApp.vueApp.provide("highlighterjs", hljs);
});
