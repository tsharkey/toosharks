// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Remove output: 'server' and adapter entirely
  vite: {
    plugins: [tailwindcss()],
  },
});
