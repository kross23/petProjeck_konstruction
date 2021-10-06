const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/js/main.js'),
	},
	output: {
		path: Path.join(__dirname, '../build'),
		filename: 'js/[name].js',
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
	plugins: [
		new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../src/img'), to: '../build/img' }] }),
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, '../src/index.html'),
		}),
	],
	resolve: {
		alias: {
			'~': Path.resolve(__dirname, '../src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},


		],
	},
};