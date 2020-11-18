Component({
    properties: {
        source: {
            type: Object
        }
    },
    data: {},
    methods: {
        getTicket: (ev) => {
            console.log(ev.target.dataset.id)
        }
    }
});
