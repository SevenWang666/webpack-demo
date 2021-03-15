const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const testPlugin= require('./myplugin/testPlugin')

function resolve(url) {
  return path.resolve(__dirname, url);
}
const baseConfig = require("./webpack.base");

const devConfig = {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    path: resolve("./dist"),
    //  filename: '[name]_[chunkhash:8].js' //输出文件
    filename: "[name]-[hash:7].js",
  },
  resolveLoader: {
    modules: ["node_modules", "./myloader"],
  },
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
      // {
      //     test:/\.js$/,
      //     use:['babel-loader']
      // },
      {
        test: /\.jsx?$/, //可匹配js,jsx文件
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //     presets: [['@babel/preset-env',
            //         {
            //             targets: {
            //                 edge: "17",
            //                 firefox: "60",
            //                 chrome: "67",
            //                 safari: "11.1"
            //             },
            //             useBuiltIns: "usage" ,//按需注入
            //             corejs:2
            //         }
            //     ]]
            // }
          },
          {
            loader: "replaceLoader",
            options: {
              name: "没什么事是不可能的",
            },
          },
        ],
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
  optimization: {
    //tree shaking  //摇树,不打包未使用的模块,开发环境不生效
    usedExports: true,
  },
  devServer: {
    contentBase: "./dist",
    open: false,
    port: 8081,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "http://localhost:9092",
      },
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new testPlugin()],
};
module.exports = merge(baseConfig, devConfig);
