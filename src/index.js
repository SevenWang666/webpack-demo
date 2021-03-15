
// import logo from './logo.png'
// //import "./index.css"
// import "./index2.less"
// // import "./index2.less"
// //import axios from 'axios'
// const axios =require('axios')

// axios.get('/api/info').then(res=>{
//     console.log('sss')
// })
// var img=new Image()
// img.src=logo;
// img.classList.add('logo');

// var root=document.getElementById('root')
// root.append(img)
// document.write('hello123 你搜发送到佛山南大佛')

// import "./index.less"
// var button=document.createElement('button')
// button.innerHTML='新增'
// document.body.appendChild(button)

// button.onclick=function(){
//     var div=document.createElement('div')
//     div.innerHTML='item'
//     document.body.appendChild(div)
// }

// import counter from  "./counter.js"
// import number from "./number.js"
// counter()
// number()
// if(module.hot){
//     //开启监听
//     module.hot.accept("./number",function(){
//         document.body.removeChild(document.getElementById("number"))
//         number()
//     })
// }

// import "@babel/polyfill"
//把使用到的es特性打包进来，其他的不用

// const array=[new promises(()=>{}),new promises(()=>{})]
// array.map(item=>{
//     console.log(item)
// })

// import React,{Component} from "react";
// import ReactDom from "react-dom";
// class App extends Component{
//     render(){
//         return <div>hello world</div>
//     }
// }
// ReactDom.render(<App/>,document.getElementById('app'));

//tree shaking
import {square} from './math.js'
console.log(square(1,2))
console.log('nothing is impossible')