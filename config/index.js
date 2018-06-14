'use strict'
// Template version: 1.2.7
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    target: 'http://148.66.11.214:8980/',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {
    //     '/bcbscan': {
    //       target: 'http://148.66.11.214:8980/',
    //       pathRewrite: {
    //         '^/bcbscan/': '/bcbscan/'
    //       }
    //     }
    // },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 3333, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    useEslint: false,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false
  },

  build: {
    target: 'http://148.66.11.214:8980/',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
