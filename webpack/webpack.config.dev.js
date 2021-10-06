const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const data = require('../data.json');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	target: 'web',
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	output: {
		chunkFilename: 'js/[name].chunk.js',
	},
	devServer: {
		historyApiFallback: true,
		//static: '../build',
		 static: {
		 	directory: Path.join(__dirname, 'public'),
		 },
		 allowedHosts: 'all',
		open: true,
		hot: true,
		compress: true,
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
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|json)$/i,
				type: 'asset/resource',
			},
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
