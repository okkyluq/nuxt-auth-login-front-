module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'auth2',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth'
	],
	// middleware global for all page 
	router: {
		middleware: ['auth']
	},
	auth: {
		redirect: {
			login: '/login',
			logout: '/login',
			home: '/',
		},
		strategies: {
			local: {
				endpoints: {
					login: {
						url: 'http://localhost/api/signin',
						method: 'post',
						propertyName: 'token'
					},
					logout: {
						url: false,
						method: 'get'
					},
					user: {
						url: 'http://localhost/api/user',
						method: 'get',
						propertyName: 'data',
					}
				},
				// tokenRequired: true,
				// tokenType: 'bearer',
			}
		}
	},

	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
