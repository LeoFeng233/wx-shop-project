//app.js
App({
    onLaunch: function () {
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                console.log(res);

            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                console.log(res);
            }
        })
    },
    globalData: {
        userInfo: null
    }
})
