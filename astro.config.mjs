// @ts-check
import { defineConfig } from "astro/config";
import Icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Icon(),
  ],
});
