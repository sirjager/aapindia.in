import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import partytown from "@astrojs/partytown";
import node from "@astrojs/node";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { astroImageTools } from "astro-imagetools";
import Compress from "astro-compress";
const _ = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const { PUBLIC_APP_URL, NODE_ENV } = _;

// https://astro.build/config
/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: PUBLIC_APP_URL,
  trailingSlash: "never",
  devToolbar: {
    enabled: NODE_ENV === "development",
  },
  integrations: [
    qwikdev(),
    icon(),
    tailwind(),
    astroImageTools,
    partytown(),
    Compress({
      Image: false,
    }),
    robotsTxt({
      sitemap: `${PUBLIC_APP_URL}/sitemap-index.xml`,
      policy: [
        {
          userAgent: "*",
          disallow: ["/admin"],
        },
      ],
    }),
  ],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
  },
  vite: {
    logLevel: NODE_ENV === "development" ? "info" : undefined,
  },
  prefetch: {
    defaultStrategy: "viewport",
  },
  adapter: node({
    mode: "standalone",
  }),
});
