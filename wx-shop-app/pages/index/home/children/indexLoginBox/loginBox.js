Component({
    properties: {
    },
    data: {},
    methods: {
        getUserInfoAction(info) {
            console.log('点击', info)
            this.triggerEvent('loginAction', info.detail.userInfo)
        }
    }
});
