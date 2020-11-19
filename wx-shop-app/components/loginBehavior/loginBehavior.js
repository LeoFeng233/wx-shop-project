module.exports = Behavior({
    data: {
        userInfoInLoginBehavior: {},
        loginAuthInLoginBehavior: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    created() {
        this.checkUserInfo();
    },
    methods: {
        checkUserInfo() {
            const app = getApp();

            if (app.globalData.userInfo) {
                this.setData({
                    userInfoInLoginBehavior: app.globalData.userInfo,
                    loginAuthInLoginBehavior: true
                })
            } else if (this.data.canIUse){
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                app.userInfoReadyCallback = res => {
                    this.setData({
                        userInfoInLoginBehavior: res.userInfo,
                        loginAuthInLoginBehavior: true
                    })
                }
            } else {
                // 在没有 open-type=getUserInfo 版本的兼容处理
                wx.getUserInfo({
                    success: res => {
                        app.globalData.userInfo = res.userInfo
                        this.setData({
                            userInfoInLoginBehavior: res.userInfo,
                            loginAuthInLoginBehavior: true
                        })
                    }
                })
            }
        },
        setUserInfoInLoginBehavior(res) {
            // console.log(this, res)
            this.setData({
                userInfoInLoginBehavior: res,
                loginAuthInLoginBehavior: true
            })
        }
    }
})
