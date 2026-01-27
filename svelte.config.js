import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md']
    })
  ],
  kit: {
    adapter: adapter()
  }
};