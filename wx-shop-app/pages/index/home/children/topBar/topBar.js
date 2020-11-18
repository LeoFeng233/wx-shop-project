Component({
    properties: {},
    data: {
        statusBarHeight: '',
        menuButtonLiftSite: ''
    },
    methods: {},
    lifetimes: {
        attached() {

            let windowWidth = 0;

            // 获取状态栏高度
            wx.getSystemInfo({
                success: (result) => {
                    windowWidth = result.windowWidth;
                    this.setData({
                        statusBarHeight: result.statusBarHeight + 6 + 'px'
                    })
                },
            });

        //    获取胶囊坐标
            const menuButtonSite = wx.getMenuButtonBoundingClientRect()
            console.log(menuButtonSite)
            this.setData({
                menuButtonLiftSite: windowWidth - menuButtonSite.left + 5 + 'px'
            })
        }
    }
});
