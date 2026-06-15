import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // Astro files
  ...eslintPluginAstro.configs.recommended,

  // TypeScript files
  ...tseslint.configs.recommended,

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
