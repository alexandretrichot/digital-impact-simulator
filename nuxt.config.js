const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
	router: {
		base: '/mne-numeric-activity/'
	}
} : {}

export default {
	mode: 'spa',
	server: {
		host: "0.0.0.0"
	},
	...routerBase,
	head: {
		title: 'Les impacts du numérique sur l\'environnement',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#fff' },
	css: [
	],
	plugins: [
	],
	buildModules: [
	],
	modules: [
	],
	build: {
		extend(config, ctx) {
		}
	}
}
