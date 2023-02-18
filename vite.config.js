import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

export default defineConfig({
	plugins: [sveltekit({
		preprocess:sveltePreprocess()
	})],
});
