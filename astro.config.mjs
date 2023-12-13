import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
      partytown({
        config: {
          forward: ["dataLayer.push"],
        },
      })
  ]
});
