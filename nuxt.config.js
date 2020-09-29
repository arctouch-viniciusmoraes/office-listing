
export default {
	/*
	 * Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || 'Office listing',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || 'Dog And Pony assessment test' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	 * Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 * Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],

	/*
	 * Nuxt.js modules
	 */
	modules: [],

	/*
	 * Build configuration
	 */
	build: {
		/*
		 * You can extend webpack config here
		 */
		extend (config, ctx) {
		}
	}
}
