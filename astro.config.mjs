// @ts-check
import { defineConfig } from "astro/config";
import Icon from "astro-icon";

import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: {
    build: {
      minify: "esbuild", // o "terser"
    }
  },

  integrations: [
    Icon(),
  ],

   adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});