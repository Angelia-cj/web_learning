'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 跨域处理
    proxyTable: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:3000', // 代理模板的基础路径
        // secure: true,  // 如果是https接口，需要配置这个参数
        ws: true, // 是否代理websockets qq
        changeOrigin: true, // 支持跨域
        pathRewirte: { // 重写路径：去掉路径中开头的'/api'
          '^/api': '' //此处为问题原因，正确写法应为： '^/api': '/api'
        }
      }
    },
    // 问题解决：
    // 去除pathRewrite
    /* proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }, */

    // api 是本地路径和后端接口路径的匹配前缀，若后端接口给了/ api这个前缀，可用上面的写法。那么还有一种情况，是后端的接口没有我们想要的匹配项（前缀）’/ api’, 是直接的http://www.xxx.com/save/post，这样的接口，我们就要用到pathRewrite来重写地址，将本地路径上的带匹配前缀的路径：http://localhost:8080/api/save/post上的前缀’/api’转成 ‘ / '。以下第一种是网络上大部分推荐的，但是我亲测是无效的，估计他们多数用的上面的方法，没有实际使用下面的方法，LZ用以下第一种方法折腾了2天无果，后去看了webpack-dev-server的issue，无意义试通了接口，即下面第二种方法，当然也不排除第一种方法是我的版本问题而没有效果，所以如果大家试了第一种方法有效就当我的方法没说，如果无效，不妨试试我的第二种方法：

    // 第一种方法（网上写的方法）
    /* proxyTable: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }, */
    // 第二种方法（亲测有效的方法）
    /* proxyTable: {
      '/api/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' // 即将上面的匹配项从 ‘/api’ 改成了 ‘/api/*’
        }
      }
    },
 */
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
