const loaderUtils = require("loader-utils");
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  //return source.replace('nothing is impossible',options.name)
  const result = source.replace("nothing is impossible", options.name);
  // this.callback :如何返回多个信息，不⽌是处理好的源码呢，可以使⽤this.callback来处理
  // this.callback(null, result);
  //this.callback(
  //  err: Error | null,
  //  content: string | Buffer,
  //  sourceMap?: SourceMap,
  //  meta?: any
  // );
  // this.async：如果loader⾥⾯有异步的事情要怎么处理呢
  const callback = this.async();
  setTimeout(() => {
    callback(null,result);
  }, 1000);
};
