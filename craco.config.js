// craco.config.js

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
	// ...
	webpack: {
		plugins: {
			add: [
				new WindiCSSWebpackPlugin({
					virtualModulePath: 'src',
				}),
			],
		},
	},
	style: {
		postcss: {
			plugins: [
				require('postcss-pxtorem')({
					rootValue: 14,
					propList: ['*'],
				}),
				require('autoprefixer'),
			],
		},
	},
};
