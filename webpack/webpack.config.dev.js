const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const data = require('../data.json');
const common = require('./webpack.common.js');
const PATHS = {
	src: Path.join(__dirname, '../src'),
	dist: Path.join(__dirname, '../dist'),
	assets: Path.join(__dirname, '../src/assets')
	
  };
module.exports = merge(common, {
	target: 'web',
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	output: {
		chunkFilename: 'js/[name].chunk.js',
		publicPath: '',
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: Path.join(__dirname, 'public'),
		},
		allowedHosts: 'all',
		open: true,
		hot: true,
		compress: true,
		//host: '192.168.0.101',
		//host :local-ip,
		port: 9000,
		onBeforeSetupMiddleware: function (devServer) {
			if (!devServer) {
				throw new Error('webpack-dev-server is not defined');
			}
			devServer.app.get('/data', function (req, res) {
				res.json(data);
			});
		},
	},
	stats: {
		//all: undefined,
		children: true
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: Path.resolve(__dirname, '../src'),
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
					},
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
});

