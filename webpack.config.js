// https://github.com/diegohaz/arc/wiki/Webpack
/*jshint esversion: 6 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require('@webpack-blocks/dev-server2')
const splitVendor = require('webpack-blocks-split-vendor')
const happypack = require('webpack-blocks-happypack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const {
  addPlugins, createConfig, entryPoint, env, setOutput,
  sourceMaps, defineConstants, webpack,
} = require('@webpack-blocks/webpack2')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')
const extractSass = new ExtractTextPlugin({ filename: "css/main.css" })

const babel = () => () => ({
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
})

const assets = () => () => ({
  module: {
    rules: [
      { test: /\.(png|jpe?g|svg|woff2?|ttf|eot|json)$/, loader: 'file-loader', options: { name: 'assets/[name].[ext]' }},
    ],
  },
})

const styles = () => () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: publicPath,
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
})

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  happypack([
    babel(),
  ]),
  assets(),
  styles(),
  resolveModules(sourceDir),

  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    splitVendor(),
    addPlugins([
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
])

module.exports = config
