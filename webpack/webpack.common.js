const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/js/main.js'),
	},
	output: {
		path: Path.join(__dirname, '../build'),
		filename: 'js/[name].js',
		clean: true,
	},
	stats: {
		//all: undefined,
		children: true
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
	plugins: [
		//new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../src/assets/icon'), to: '../build/img' }] }),
		// new HtmlWebpackPlugin({
		// 	template: Path.resolve(__dirname, '../src/index.html'),
		// }),
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, '../src/index.pug'),
			filename: 'index.html',
			minify: false
		  }),
		new HtmlWebpackPugPlugin({
			adjustIndent: true
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
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		],
	},
};
