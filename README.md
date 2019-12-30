# vue-cli3.0无config文件夹
# WebProcessvue-cli3.0
接口代理
# config.js
let URL = '/api';//build将/hdfqs代理到http://localhost:8000
// let URL = 'http://localhost:8000';//build
let ROOT;//本地
if(process.env.NODE_ENV === "development"){
    ROOT = "/api"
}else{
    ROOT = URL
}
exports.URL = URL;
exports.ROOT = ROOT;

# util/fetch.js
import axios from 'axios';
import BaseUrl from "../config"
// 创建axios实例
const service = axios.create({
//动态BaseUrl
  baseURL: BaseUrl.ROOT, //config.js
  // baseURL: 'hdfq', // api的base_url//vue.config.js
  // baseURL:  process.env.BASE_API, // api的base_url
  timeout: 60000,                  // 请求超时时间
  withCredentials: false,
  	headers: { 
		'Content-Type': 'application/json;charset=UTF-8'},
});

# vue.config.js
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
   }
