Component({
    options: {
        addGlobalClass: true,
    },
    properties: {
        tabs: {
            type: Object
        },
        activeTab: {
            type: Number,
            value: 0
        },
        animation: {
            type: Boolean,
            value: true
        },
    },
    data: {
        currentView: 0
    },
    observers: {
        activeTab: function activeTab(_activeTab) {
            let len = this.data.tabs.length;
            if (len === 0) return;
            let currentView = _activeTab - 1;
            if (currentView < 0) currentView = 0;
            if (currentView > len - 1) currentView = len - 1;
            this.setData({ currentView: currentView });
        }
    },
    methods: {
        tapItem(e) {
            const index = e.currentTarget.dataset.index;
            this.setData({
                activeTab: index
            })
            this.triggerEvent('tabClick', { index: index });
        }
    }
});
