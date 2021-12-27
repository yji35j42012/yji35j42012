const store = new Vuex.Store({
    state: {
        username: null,
        toast: null,
        alert: {
            show: null,
            title: null,
        },
        newList: {
            evaluate_id: '',
            evaluate_store: '告胖早午餐-東興店',
            evaluate_menu: '',
            evaluate_eat: '',
            evaluate_action: 0,
            evaluate_amount: '',
            evaluate_experience: '',
            evaluate_user: '',
            evaluate_date: '',
        },
        // 測試的
        count: 0,
    },
    getters: {},
    mutations: {
        increment() {
            console.log('++')
            this.state.count++
        },
        ddddd() {
            console.log('-....-')
            this.state.count--
        },
        SET_ALERT(state, str) {
            state.alert = str
        },
        SET_EDIT_LIST(state, str) {
            // state.newList.evaluate_user = state.username
        },
        SET_USER(state, str) {
            state.username = str
        },
    },
    actions: {
        USER({ commit }, str) {
            commit('SET_USER', str)
        },
        ALERT({ commit }, str) {
            commit('SET_ALERT', str)
        },
        EDIT_LIST({ commit }, str) {
            commit('SET_EDIT_LIST')
        },
    },
})
