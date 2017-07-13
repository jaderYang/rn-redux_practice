'use strict'
// let baseUrl = 'http://demo.jrmap.net'
let baseUrl = 'http://116.62.26.227:7080/design-cms-web/'
import { showLogicTip } from '../actions/AlertTips'
import store from '../Store'

function RCNetUtil(){
  if (typeof RCNetUtil.instance === 'object') {
    return RCNetUtil.instance;
  }
  RCNetUtil.instance = this;
}

let _cookie = '';

export function jrGet(url, params ,success, failure) {
  let finalUrl = baseUrl + url + '?format=json&' + paramsToUrl(params);
  console.log('get请求地址:' + finalUrl, params);

  fetch(finalUrl)
  .then((response) => response.text())
  .then((responseText) => {
    var resObj = JSON.parse(responseText);
    if(resObj.ret === 0){
      success(resObj.data);
    }else {
      failure(resObj.msg);
    }
  })
  .catch((responseData) => {
    failure(responseData);
  }).done();
}

export function rcGet(url, params){
  let finalUrl = baseUrl + url + '?' + paramsToUrl(params);
  console.log('get请求地址:' + finalUrl, params);
  return fetch(finalUrl)
    .then((response) => response.text())
    .then((responseText) => {
      var resObj = JSON.parse(responseText);
      if(resObj.success != true){
        throw (resObj);
      }
    })
    .catch((responseData) => {
      store.dispatch(showLogicTip(responseData.respMessage));
      throw (responseData.respMessage);
    });
}

export function rcPost(url, params){
  var fetchOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/x-www-form-urlencoded',
      'Cookie': _cookie
    },
    body: paramsToUrl(params)
  };
  let finalUrl = baseUrl + url;
  console.log('post请求地址及参数:' + finalUrl, paramsToUrl(params));

return fetch(finalUrl, fetchOptions)
  .then((response) => {
    console.log(response);
    _cookie = response.headers.map["set-cookie"];
    return response.text()
  })
  .then((responseText) => {
    var resObj = JSON.parse(responseText);
    if(resObj.success != true){
      throw (resObj);
    }
  })
  .catch((responseData) => {
    store.dispatch(showLogicTip(responseData.respMessage));
    throw (responseData.respMessage);
  });
}

export function jrPost(url, params, success, failure) {
   var fetchOptions = {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-type': 'application/x-www-form-urlencoded'
     },
     body: paramsToUrl(params)
   };
   let finalUrl = baseUrl + url + '?format=json';
   console.log('post请求地址及参数:' + finalUrl, paramsToUrl(params));
   fetch(finalUrl, fetchOptions)
   .then((response) => response.text())
   .then((responseText) => {
     console.log('接口返回数据:' + responseText);
     var resObj = JSON.parse(responseText);
     if(resObj.ret === 0){
       success(resObj.data);
     }else {
       failure(resObj.msg);
     }
   })
   .catch((responseData) => {
     failure(responseData);
   }).done();
}

export function paramsToUrl(params){
  if(typeof params !== 'object'){
    return;
  }
  var str = [];
  for(var p in params)
  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
  return str.join("&");
}
