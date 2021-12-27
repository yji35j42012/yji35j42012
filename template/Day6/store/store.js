const store = new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {},
    mutations: {
        increment() {
            console.log('++');
            this.state.count++;
        },
        ddddd() {
            console.log('-....-');
            this.state.count--;
        },
    },
    actions: {},
});
