import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // storyblok({
    //   accessToken: env.STORYBLOK_TOKEN,
    //   components: {
    //     blogPost: 'storyblok/BlogPost',
		// 		blogPostList: 'storyblok/BlogPostList',
		// 		page: 'storyblok/Page',
    //   },
    //   apiOptions: {
    //     // Choose your Storyblok space region
    //     region: "eu", // optional,  or 'eu' (default)
    //   },
    // }),
  ],
});
