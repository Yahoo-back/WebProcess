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