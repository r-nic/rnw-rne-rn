// web/webpack.config.js

const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    /\.js$/, // 追加
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web', ["transform-runtime", {
        "polyfill": false,
        "regenerator": true
      }]],
      presets: ['react-native']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};


const ttfLoaderConfiguration = {
    test: /\.ttf$/,
    loader: 'url-loader',
    include: [
      /\.ttf$/
    ]
  }

module.exports = {
  // your web-specific entry file
  entry: path.resolve(appDirectory, 'index.web.js'),

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist')
  },

  // ...the rest of your config

  module: {
    rules: [
        ttfLoaderConfiguration, // 先にttfLoaderが必要か？
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV === 'production' || true
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ],
    modules: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules'),
    ],
    alias: {
        'react-native': 'react-native-web'
      }
  }
}