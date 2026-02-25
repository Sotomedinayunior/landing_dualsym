// @ts-check
import { defineConfig } from "astro/config";
import Icon from "astro-icon";

export default defineConfig({
  vite: {
    build: {
      minify: "esbuild", // o "terser"
    }
  },
  integrations: [
    Icon(),
  ],
});
