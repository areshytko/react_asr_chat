var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: true
});

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    //publicPath: '/watson_react_asr/dist'
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};
