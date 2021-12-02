const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports = {
	entry: {
		app: Path.resolve(__dirname, '../src/js/main.js'),
		services: Path.resolve(__dirname, '../src/js/services.js'),
	},
	output: {
		path: Path.join(__dirname, '../build'),
		//filename: 'js/[name].js',
		filename: "[name].entry.js",
		clean: true,
	},
	stats: {
		//all: true,
		children: true
	},
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
			name: false,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, '../src/index.pug'),
			chunks:  ['app'],
			filename: 'index.html',
			inject: true,
			minify: false
		}),
		new HtmlWebpackPlugin({
			template: Path.resolve(__dirname, '../src/services.pug'),
			chunks:  ['services'],
			filename: './services/services.html',
			inject: true,
			minify: false
		  }),
		new HtmlWebpackPugPlugin({
			adjustIndent: true
		}),
	],
	resolve: {
		alias: {
			'~': Path.resolve(__dirname, '../src'),
			extensions: ['.js', '.jsx', '.scss']
		},
	},

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|json|woff2|mp4)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true,
				}
			},
		],
	},
};
