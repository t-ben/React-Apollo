const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const __root = path.join(__dirname, '../../');
const __src = path.join(__root, 'src');
const __dist = path.join(__root, 'dist');
const __node_modules = path.join(__root, 'node_modules');

const config = {
  devtool: 'eval',
  entry: path.join(__src, 'index.js'),
  output: {
    path: __dist,
    filename: 'index.js',
    library: 'WatsonHealthUI',
    libraryTarget: 'umd'
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: path.join(__src, 'styles'),
          to: 'styles',
          ignore: [ '.DS_Store']
        },
        {
          from: path.join(__src, 'assets'),
          to: 'assets',
          ignore: [ '.DS_Store']
        }
      ]
    )
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: __src,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __src
      },
      {
        test: /\.otf$/,
        loader: 'url',
      },
      {
        test: /\.svg|\.png$/,
        loader: 'url',
      }
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react/lib/shallowCompare': {
      commonjs: 'react/lib/shallowCompare',
      commonjs2: 'react/lib/shallowCompare',
      amd: 'react/lib/shallowCompare',
      root: 'ReactShallowCompare',
    },
    'react/lib/ReactCSSTransitionGroup': {
      commonjs: 'react/lib/ReactCSSTransitionGroup',
      commonjs2: 'react/lib/ReactCSSTransitionGroup',
      amd: 'react/lib/ReactCSSTransitionGroup',
      root: 'ReactCSSTransitionGroup',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'react-dom/server': {
      commonjs: 'react-dom/server',
      commonjs2: 'react-dom/server',
      amd: 'react-dom/server',
      root: 'ReactDOMServer',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: 'lodash',
    },
  },
  resolve: {
    fallback: __node_modules,
    alias: {
      assets: path.join(__src, 'assets'),
      helpers: path.join(__src, 'helpers'),
      modules: path.join(__src, 'modules'),
      styles: path.join(__src, 'styles'),
    },
  },
  resolveLoader: { fallback: __node_modules },
  eslint: {
    configFile: path.join(__root, 'config/eslint/.dev.rc')
  },
};


module.exports = config;
