Component({
    data: {
        selected: 0,
        color: "#333",
        list: [{
            text: "首页",
            iconClassName: "icon-store-2-line",
            selectedIconClassName: "icon-store-2-fill",
            pagePath: "/pages/index/home/home"
        },
        {
            text: "购物袋",
            iconClassName: "icon-shopping-bag-3-line",
            selectedIconClassName: "icon-shopping-bag-3-fill-copy",
            pagePath: "/pages/index/cart/cart"
        },
        {
            text: "我的",
            iconClassName: "icon-user-2-line",
            selectedIconClassName: "icon-user-2-fill-copy",
            pagePath: "/pages/index/mine/mine"
        }
    ]
    },

    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path

            wx.switchTab({
                url
            })
            this.setData({
                selected: data.index
            })
        }
    }
})