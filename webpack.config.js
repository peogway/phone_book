const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	// Correctly define the entry point, assuming your main file is
	// at `phone_book/Phonebook/src/main.jsx`.
	entry: './Phonebook/src/main.jsx',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/, // This regex will match both .js and .jsx files
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
	resolve: {
		// Correct way to add extensions to a resolve configuration
		extensions: ['.*', '.js', '.jsx'],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			// Correctly reference the HTML template, assuming it's in the Phonebook directory
			template: path.resolve(__dirname, 'Phonebook', 'index.html'),
			filename: './index.html',
		}),
	],
}
