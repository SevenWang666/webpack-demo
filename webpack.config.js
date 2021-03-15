const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

function resolve(url) {
  return path.resolve(__dirname, url);
}
module.exports = {
  entry: {
    index: "./src/index.js",
    //  login: './src/login.js'
  },
  // entry:'./src/index.js',
  // output: {
  //     path: resolve('./dist'),
  //   //  filename: '[name]_[chunkhash:8].js' //输出文件
  //    filename:'[name].js'
  // },
  // watch:false,
  // watchOptions:{
  //     ignored:/node_modules/,
  //     aggregateTimeout:300,
  //     poll:1000  //判断文件是否发生变化是通过不停的询问系统,每秒检查一次

  // },
  // devtool:"inline-source-map",
  // mode: "development",
  // devServer:{
  //     contentBase:"./dist",
  //     open:true,
  //     port:8081,
  //     hotOnly:true,
  //     proxy:{
  //         "/api":{
  //         target:'http://localhost:9092',
  //         }
  //     }
  // } ,
  
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        // use:'file-loader'
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 20480,
          },
        },
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: "file-loader",
        },
      },
      // {
      //     test:/\.css$/,
      //     use:["style-loader","css-loader"]
      // },
      {
        test: /\.less$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader",
          // plugins:()=>[
          //     require('autoprefixer')({
          //         overrideBrowserslist:["last 2 versions",">1%"]
          //     })
          // ]
        ],
      },
    ],
  },
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      tilte: "首页",
      template: "./src/index.html",
      inject: "body", //head/true/body
      chunks: ["index"],
      filename: "index.html",
    }),
    //  new MiniCssExtractPlugin({ //抽离css之后，会无法热更新
    //      filename:"[name]_[contenthash:5].css"//5为hash位数
    //  }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
