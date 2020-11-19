// components/address/add_location/location.js
import {LOCATION_API} from '../../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // regions:['北京市','北京市','东城区'],
    switchChecked:false,
    type:"",
    data:{
      name:'',
      tel:'',
      region:['北京市','北京市','东城区'],
      detail_address:'',
      code:''
    },
  },

  binRegionChange:function(e){
    this.setData({
      [`data.region`]:e.detail.value,
    })
  },

  switchChange:function(e){
    const value = e.detail.value;
    this.setData({
      type: value ? '默认' : ''
    });
  },

  btnAction(){
    wx.navigateBack({
      delta: 1
    });
    //向服务器端传递数据
    wx.request({
      url: 'http://localhost:3000',
      data:'/address',
      method:'POST',
      success(res){
        console.log("请求数据成功......");
        console.log(res);
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})