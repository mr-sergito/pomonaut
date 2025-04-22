import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit";
import type { Config } from "@sveltejs/kit";

const config: Config = {
  preprocess: [
    vitePreprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: "./src/lib",
      $components: "./src/lib/components",
      $stores: "./src/lib/stores",
    },
  },
};

export default config;
