import {HOST} from './api'

class Request{
  //设置服务器地址
  constructor(baseUrl){
    this.baseUrl = baseUrl;
  }

  async request(method,url,data={}){
    const token = wx.getAccountInfoSync("TOKEN");
    const header = {};

    if(token){
      header.Authorizetion = 'Bearer' + token;
    }
    return new Promise((resolve,reject) => {
      wx.request({
        url: this.baseUrl + url,
        method,
        data,
        header,
        success(res){
          if(res.statusCode >= 200 && res.statusCode < 300){
            resolve(res.data);
          }else{
            reject(res.data.message);
          }
        },
        fail(error){
          reject(error);
        }
      })
    })
  }
}

export default new Request(HOST);