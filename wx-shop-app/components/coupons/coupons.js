// components/coupons/coupons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupons:[
      {
        id:0,
        price:200,
        type:"无门槛使用",
        date:"2020/10/15",
        time:"13:15"
      },
      {
        id:1,
        price:9,
        type:"买12元可用",
        date:"2020/10/15",
        time:"13:15"
      }
    ]
  },

    goHomeAction(){
      wx.switchTab({
        url: '../../pages/index/home/home',
      });
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