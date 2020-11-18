// components/index/home/home.js
const createRecycleContext = require('miniprogram-recycle-view')


Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeight: '',
        tas: [
            {
                text: "默认",
            },
            {
                text: "新品"
            },
            {
                text: "销量"
            },
            {
                text: "价格"
            },
            {
                text: "价格"
            },
            {
                text: "价格"
            },
            {
                text: "价格"
            },
            {
                text: "价格"
            },
            {
                text: "价格"
            }
        ],
        activeTab: 0,
        topBarHeight: '',
        // recycleList: [
        //     {
        //         text: 1
        //     },
        //     {
        //         text: 2
        //     },
        //     {
        //         text: 3
        //     }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTabClick(data) {
            this.setData({
                activeTab: data.detail.index
            })
        },
    },
    pageLifetimes: {
        show() {
            if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 0
                })
            }
        }
    },
    lifetimes: {
        ready() {
            const ctx = createRecycleContext({
                id: 'recycleId',
                dataKey: 'recycleList',
                page: this,
                itemSize: function (item, index) {
                    return {
                        width: this.transformRpx(348),
                        height: this.transformRpx(520)
                    }
                }
            })
            this.ctx = ctx;
            console.log(ctx)
            const newList = [
                {
                    text: 1
                },
                {
                    text: 2
                },
                {
                    text: 3
                }];
            ctx.append(newList)
            ctx.append(newList)
            ctx.append(newList)
            ctx.append(newList)
            ctx.append(newList)
            // ctx.update(beginIndex, list)
            // ctx.destroy()

        },
        attached() {

            // 获取状态栏的高度
            wx.getSystemInfo({
                success: (result) => {
                    this.setData({
                        statusBarHeight: result.statusBarHeight + 10 + 'px'
                    })
                },
            });

            // 获取自定义导航栏的高度
            wx.createSelectorQuery().select('.home-page-top-bar').boundingClientRect((rect) => {
                this.setData({
                    topBarHeight: rect.height + 'px'
                })
            }).exec();
        }
    }
})
