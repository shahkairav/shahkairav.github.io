// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { createCssVariablesTheme } from 'shiki/core';

// Code colours come from CSS variables (see global.css), so highlighting
// follows the site palette in both light and dark mode.
const codeTheme = createCssVariablesTheme({
  name: 'invariants',
  variablePrefix: '--code-',
  variableDefaults: {},
  fontStyle: true,
});

export default defineConfig({
  site: 'https://shahkairav.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: false }]],
    }),
    shikiConfig: { theme: codeTheme },
  },
});
