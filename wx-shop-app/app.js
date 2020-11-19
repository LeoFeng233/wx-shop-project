//app.js
App({
    onLaunch: function () {
        // 检查登录状态
        this.checkLoinState();
        this.checkUserAuth();
    },
    globalData: {
        userInfo: null
    },

    checkUserAuth() {
// 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },


    // 登录逻辑
    checkLoinState() {
        // 获取token
        const token = wx.getStorageSync('token');
        // 如果token不为空，则请求服务器，验证登录状态
        if (token) {
            // 如果成功获取token，则请求服务器，确认登录信息是否过期
            wx.request({
                url: 'http://localhost:3000/api/auth/checkLogin',
                method: 'GET',
                data: {
                    token
                },
                success(result) {
                },
                fail(reason) {
                    console.log(reason);
                },
                complete: (info) => {
                    // 返回成功的结果且登录状态过期，则手动调用登录逻辑。
                    if (info.statusCode === 200 && info.data.loginState !== 1) {
                        this.login()
                    }
                }
            })
        } else {
            //    这里需要手动验证登录
            this.login();
        }

    },
    login() {
        wx.login({
            timeout: 2000,
            success(info) {

                wx.request({
                    url: 'http://localhost:3000/api/auth/register',
                    method: 'POST',
                    data: {
                        code: info.code
                    },
                    success(info) {
                        wx.setStorageSync('token', info.data.token);
                    },
                    fail(reason) {
                        console.log(reason);
                    },
                    complete() {
                    }
                })
            },
            fail(reason) {
                console.log('fail', reason);
            },
            complete(info) {

            }
        })
    },

})
