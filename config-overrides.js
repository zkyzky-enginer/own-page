const { override, fixBabelImports, addLessLoader, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	// 样式重置
	addLessLoader({
		lessOptions: {
			javascriptEnabled: true,
			modifyVars: { '@primary-color': '#20a53a' },
		},
	}),
	adjustStyleLoaders(({ use: [, , postcss] }) => {
		const postcssOptions = postcss.options;
		postcss.options = { postcssOptions };
	})
);
