const myPlugin = require('./myPlugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},

	devServer: {
		contentBase: './public',
		inline: true,
		historyApiFallback: true
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}
		]
	},

	plugins: [
		new myPlugin()
	]
}
