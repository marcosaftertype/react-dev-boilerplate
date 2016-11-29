const webpack 	= require('webpack')
const path 		= require('path')

module.exports = {
	context: __dirname,
	devtool: 'inline-sourcemap',
	entry: './js/client.js',
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread'],
			}
		},
		{
			test: /\.scss$/, 
			loaders: [
				'style',
				'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
				'sass'
			]
		}
		]
	},
	output: {
		path: path.join(__dirname, 'src'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/), // To reduce output size when using moment
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	externals: {
		config: JSON.stringify(require('./config.json'))
	}
};