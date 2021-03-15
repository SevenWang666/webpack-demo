const path=require('path')
function resolve(url){
    return path.resolve(__dirname,url)
}
module.exports={
    entry:'./src/index.js',
    output:{
        path:resolve('./dist'),
        filename:'main.js' //输出文件
    },
    mode:"production"
}