const path = require('path')
const fs = require('fs')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // eslint-loader 是否在保存的时候检查
  baseUrl: './',
  lintOnSave: true,
  /** 生产是否打开SourceMap*************************************/
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('util', resolve('src/util'))
      .set('style', resolve('src/style'))
  },
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('./src/style/mixin.scss', 'utf-8')
      }
    }
  },
  /** webpack配置项 *******************************************/
  // 如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  // configureWebpack: {
  //   externals: {
  //     'vue': 'Vue',
  //     'vue-router': 'VueRouter',
  //     'vuex': 'Vuex',
  //     'axios': 'axios',
  //     'echarts': 'window.echarts'
  //   },
  //   plugins: [

  //   ]
  // },
  /** vue-loader 配置项****************************************/
  // vueLoader: {},
  devServer: {
    port: 3000,
    open: true, // 配置自动启动浏览器
    // 配置代理(跨域)
    proxy: {
      '/sso': {
        target: 'http://sso.gzgz.gov',
        pathRewrite: {
          '^/sso': ''
        }
      },
      '/zujia': {
        target: 'http://172.23.1.122:8080',
        pathRewrite: {
          '^/zujia': ''
        }
      },
      '/pc': {
        target: 'http://172.23.1.23:8080',
        pathRewrite: {
          '^/pc': ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
  // ...
  }
}
