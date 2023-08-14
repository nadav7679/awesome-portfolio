import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  markdown: {
      remarkPlugins: [
        remarkMath,
    ],
    rehypePlugins: [
        [rehypeKatex, {
        // Katex plugin options
        }]
    ]
  }
});