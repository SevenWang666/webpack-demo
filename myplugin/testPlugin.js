class testPlugin {
    constructor(){
        console.log('初始化插件')
    }
    apply(compiler){
        compiler.hooks.done.tap('testPlugin',function(compilation,cb){
            console.log('编译完成')
        })
    }
}
module.exports=testPlugin