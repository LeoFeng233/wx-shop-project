// components/address_manage/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[
      {
        name:"小白",
        tel:18769868597,
        city:"上海市",
        rigion:"浦东区",
        level:"东方明珠27号",
      },
      {
        name:"小黑",
        tel:18769868597,
        city:"上海市",
        rigion:"浦东区",
        level:"五角场27号"
      }
    ]
  },

  toAddressAction(){
    wx.navigateTo({
      url: '../add_location/location',
      success:function(result){
        console.log("跳转成功");
        },
      fail:function(error){
          console.log(跳转失败);
      }
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