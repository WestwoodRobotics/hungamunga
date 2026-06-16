import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		prerender: {
				handleMissingId: 'warn',
				handleHttpError: ({ path, referrer, message }) => {
					if (path === '/og.png') return;
					throw new Error(message);
				}
			}
	}
};

export default config;
