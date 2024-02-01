import { themes } from "./src/lib/themes";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  content: ["./src/**/*.{astro,html,svg,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  daisyui: {
    themeRoot: ":root",
    base: true,
    styled: true,
    utils: true,
    logs: false,
    prefix: "",
    themes: themes,
  },
  theme: {
    container: {
      center: true,
    },
  },
};
