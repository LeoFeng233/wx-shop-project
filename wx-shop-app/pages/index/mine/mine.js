// components/index/mine/mine.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        user_inform:{
            path:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3154201650,1083827121&fm=26&gp=0.jpg",
            name:"空山新雨后",
        },
    },


    /**
     * 组件的方法列表
     */
    methods: {
        goAddressAction(){
            wx.navigateTo({
              url: '../../../components/address/address_manage/address',
              success:function(result){
                console.log("跳转成功");
                },
              fail:function(error){
                  console.log(跳转失败);
              }
            });
        },
        goCouponsAction(){
            wx.navigateTo({
                url: '../../../components/coupons/coupons',
                success:function(result){
                  console.log("跳转成功");
                  },
                fail:function(error){
                    console.log(跳转失败);
                }
              });
        }

    },
    pageLifetimes: {
        show() {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 2
                })
            }
        }
    }
})
