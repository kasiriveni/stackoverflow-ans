var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry   :   './src/app.js',
    output  :   {
        filename    :   './dist/bundle.js'
    },
    module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename : './dist/app.bundle.css'
    }),
  ]
}