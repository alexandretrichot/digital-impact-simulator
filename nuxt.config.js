let routerBase = {};

if (process.env.DEPLOY_ENV === 'GH_PAGES') {
	routerBase = {
		router: {
			base: '/mne-numeric-activity/'
		}
	};
} else if (process.env.DEPLOY_ENV === 'MNE') {
	routerBase = {
		router: {
			base: '/numeric-activity/'
		}
	};
}

export default {
	mode: 'spa',
	server: {
		host: "0.0.0.0"
	},
	...routerBase,
	head: {
		htmlAttrs: {
			lang: 'fr',
		},
		title: 'Les impacts du numérique sur l\'environnement',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap", rel: "stylesheet" }
		]
	},
	loading: { color: '#fff' },
	css: [
		'~/assets/scss/main.scss'
	],
	plugins: [
	],
	buildModules: [
		'@nuxtjs/style-resources'
	],
	styleResources: {
		scss: [
			'./assets/scss/vars.scss'
		]
	},
	modules: [
	],
	build: {
		extend(config, ctx) {
		}
	}
}
