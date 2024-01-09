import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
/** @type {import("prettier").Config} */

// https://astro.build/config
export default defineConfig({
  outDir: "./out",
  integrations: [tailwind()],
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
});
