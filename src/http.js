import axios from "axios";
//import {  Message,Loading} from 'element-ui';
// import router from './router/index'
/*
let loading ;
function startLoading(){
  loading = Loading.service({
    lock:true,
    text:'拼命加载中~~~~',
    background:'rgba(0,0,0,0.6)'
  });
}
function endLoading(){
  loading.close();
}*/
//1:请求拦截
axios.interceptors.request.use(
  config=>{
//  startLoading();
 if(localStorage.eleToken){
   //设置统一的请求头
   config.headers.Authorization = localStorage.eleToken;
 }
 return config;
},
error=>{
  return Promise.reject(error);
})
//2：响应拦截
axios.interceptors.response.use(
  response =>{
  // endLoading();
  return response;
},
  error=>{
  // endLoading();
  // Message.error(error);

  // const {status}= error.response;//解构当前的状态码
//   if(status ==401){
// // Message.error('登录失效，请重新登录');
// localStorage.removeItem("eleToken");
// // router.push('/login');
// console.log("登录失败")
//   }
  return Promise.reject(error);
  }
)



export default axios