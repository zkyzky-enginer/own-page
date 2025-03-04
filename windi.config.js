import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)', // 定义主题色
				text: 'var(--text-color)',
			},
		},
	},
	extract: {
		include: ['**/*.{jsx,js,css,html}'],
		exclude: ['node_modules', '.git', '.next'],
	},
});
