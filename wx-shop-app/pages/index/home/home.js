// components/index/home/home.js
const createRecycleContext = require('miniprogram-recycle-view')
const loginBehavior = require('../../../components/loginBehavior/loginBehavior')

Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    behaviors: [loginBehavior],
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
        cateTabFixedInTop: false,
        cateTabOffsetTop: 0,
        cateTabScrollTop: 0,
        cateTabsInfo: {},
        // loginAuth: false,


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

    observers: {
        //    计算tab栏到recycle-view顶端的距离
        'topBarHeight, cateTabOffsetTop': function (topBarHeight, cateTabOffsetTop) {
            if (topBarHeight !== '' && cateTabOffsetTop !== 0) {
                this.setData({
                    cateTabScrollTop: cateTabOffsetTop - parseInt(topBarHeight)
                })
            }
        }
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
        goodsListScroll(info) {
            if (info.detail.scrollTop > this.data.cateTabScrollTop) {
                this.setData({
                    cateTabFixedInTop: true
                })
            } else {
                this.setData({
                    cateTabFixedInTop: false
                })
            }
        },
        reloadPage(res) {
            console.log('trri', res)
            this.setUserInfoInLoginBehavior(res);
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
        created() {


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
            wx.createSelectorQuery().select('.goods-cate-tab').boundingClientRect((rect) => {
                this.setData({
                    cateTabOffsetTop: rect.top,
                    cateTabsInfo: {
                        top: rect.top,
                        height: rect.height
                    }
                })
            }).exec();
        },
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

        },
    },

})
