const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require("./package.json").dependencies;

const depsMap = Object.keys(deps).reduce((acc, dep) => {
  acc.dep = {
    eager: true,
    singleton: true,
    requiredVersion: deps[dep]
  }

  return acc
}, {})

module.exports = {
  entry: [
    "./src/index.js",
  ],
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      chunks: ['main'],
    }),
    new ModuleFederationPlugin({
      name: 'courier',
      filename: 'remoteEntry.js',
      remotes: {
        core: "core@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        './router': './src/router/index.js'
      },
      shared: {
        ...depsMap
      },
    }),
  ],
};