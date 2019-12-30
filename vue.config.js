const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const BaseUrl = require("./src/config.js")
console.log(BaseUrl.ROOT)
console.log(BaseUrl.URL)

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            minPixelValue: 1
          })
        ]
      }
    }
  },
  devServer: {
    host: "localhost",
    port: 8009,     // 端口
    open: true,
    // https: false, // https:{type:Boolean}
    proxy:{
      [BaseUrl.ROOT]:{
        // target: 'http://localhost:8000',
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true,
        // secure: false,//如果是https接口，需要配置这个参数
        pathRewrite: {
          [`^${BaseUrl.ROOT}`]: '/'
        }
      }
      // '/hdfq':{
      //     target: 'http://localhost:8000',
      //     ws: true,
      //     changeOrigin: true,
      //     // secure: false,//https接口需要配置
      //     pathRewrite: {
      //       '^/hdfq': '/'
      //     }
      //   },
      //   '/hdfqs':{
      //     target: 'http://localhost:8000',
      //     ws: true,
      //     changeOrigin: true,
      //     // secure: false,//https接口需要配置
      //     pathRewrite: {
      //       '^/hdfqs': '/'
      //     }
      //   },
    },

    // proxy:{
    //   '/hdfq':{
    //     target: 'http://localhost:8000',
    //     ws: true,
    //     changeOrigin: true,
    //     // secure: false,//https接口需要配置
    //     pathRewrite: {
    //       '^/hdfq': '/'
    //   }
    //   }
    // },
},
// withCredentials: false,
// lintOnSave: process.env.NODE_ENV !== 'production'
// lintOnSave: false   // 取消 eslint 验证
}
