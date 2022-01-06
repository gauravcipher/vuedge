const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  //devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",
  entry: [
    // configure of use app.js & plugin.js based on env(dev, build)
    require.resolve(`webpack-dev-server/client`),
    path.resolve(__dirname, "./src/app.js")
  ].filter(Boolean),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    //filename: 'vuedge.js',
    /*library: 'vuedge',
    libraryExport: 'default',
    libraryTarget: 'umd'*/
  },
  /*resolve: {
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: "@vue/runtime-dom"
    }
  },*/
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 }
        }
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,// CSS hot reload during development
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import './src/assets/styles/index.scss';`
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin(
      {
        title: 'VuEdge',
        template: 'public/index.html',
        filename: 'index.html',
        cache: false,
        publicPath: "/dist/"
      }
    ),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: path.resolve(__dirname, "dist"),
    overlay: true,
    injectClient: false,
    disableHostCheck: true
  }
});