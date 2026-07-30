import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],

  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      assets: 'build'
    }),

    paths: {
      base: dev ? '' : process.env.BASE_PATH || ''
    }
  }
};

export default config;
