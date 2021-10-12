/* eslint-disable no-undef */
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	//stats: 'errors-only',
	bail: true,
	output: {
		filename: 'js/[name].[chunkhash:8].js',
		chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
		assetModuleFilename: 'assets/[name][contenthash][ext]'
	},
	plugins: [
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new MiniCssExtractPlugin({
			filename: './css/bundle.css',
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.s?css/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			// {
			//   test: /\.(png|svg|jpg|jpeg|gif)$/i,
			//   use: [
			//     {
			//       loader: 'file-loader',
			//       options: {
			//         name: '[path][name].[ext]',
			//       },
			//     },
			//   ],
			// }
		],
	},
});
