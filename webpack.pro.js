
const webpack=require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const merge=require('webpack-merge')


function resolve(url) {
    return path.resolve(__dirname, url)
}
const baseConfig=require('./webpack.base')
const prodConfig = {
    output: {
        path: resolve('./dist'),
      //  filename: '[name]_[chunkhash:8].js' //输出文件
       filename:'[name]-[chunkhash:8].js'
    },
    mode: "production",
    devtool:"none",
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif)$/,
               // use:'file-loader'
               use:{
                   loader:"url-loader",
                   options:{
                       name:"[name].[ext]",
                       outputPath:"images/",
                       limit:20480
                   },
                   
               }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
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
                }
    
            },
            {
                test:/\.(woff2|woff)$/,
                use:{
                    loader:"file-loader",
                }
            },
            // {
            //     test:/\.css$/,
            //     use:["style-loader","css-loader"]
            // },
            {
                test:/\.less$/,
                use:[
                   MiniCssExtractPlugin.loader,
                   // "style-loader",
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                      // plugins:()=>[
        //     require('autoprefixer')({
        //         overrideBrowserslist:["last 2 versions",">1%"]
        //     })
        // ]
                ]
            }
        ]
    },
    optimization:{
        usedExports:true ,//在正式环境中才会生效，开发环境中不生效
        sideEffects:false  ////避免摇掉css模块，需要在package.json 模块配置

    },
    plugins:[
          new MiniCssExtractPlugin({ //抽离css之后，会无法热更新
             filename:"[name]_[contenthash:5].css"//5为hash位数
         }),
    ]

}
module.exports =  merge(baseConfig,prodConfig)

