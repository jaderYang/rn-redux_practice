'use strict'
import React from 'react';
import { jrPost, jrGet } from './JRNetUtil';

//单例
function ApiClient(){
  if (typeof ApiClient.instance === 'object') {
    return ApiClient.instance;
  }
  ApiClient.instance = this;
}

ApiClient.prototype._login = function (params, successCallback, failueCallback) {
  const url = '/account/auth';
  jrPost(url, params, successCallback, failueCallback);
};

ApiClient.prototype._carOnlineList = function(params, successCallback, failueCallback){
  const url = '/online/list';
  jrPost(url, params, successCallback, failueCallback);
};

ApiClient.prototype._carOnlineView = function(params, successCallback, failueCallback){
  const url = '/online/view';
  jrPost(url, params, successCallback, failueCallback);
};

ApiClient.prototype._carTrack = function(params, successCallback, failueCallback){
  const url = '/online/track';
  jrGet(url, params, successCallback, failueCallback);
};

ApiClient.prototype._dashBorad = function(params, successCallback, failueCallback) {
  const url = '/dashboard/list';
  jrPost(url, params, successCallback, failueCallback);
}

ApiClient.prototype._carList = function(params, successCallback, failueCallback) {
  const url = '/car/list';
  jrPost(url, params, successCallback, failueCallback);
}

module.exports = ApiClient;
