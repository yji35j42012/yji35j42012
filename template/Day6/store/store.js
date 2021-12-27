const timeHandler = {
    getDate() {
        let year = new Date().getFullYear()
        let mounth = new Date().getMonth() + 1
        if (mounth < 9) {
            mounth = '0' + mounth
        }
        let date = new Date().getDate()
        if (date < 9) {
            date = '0' + date
        }
        return year + '-' + mounth + '-' + date
    },
}

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
        SET_USER(state, str) {
            state.username = str
        },
        SET_ALERT(state, str) {
            state.alert = str
        },
        SET_EDIT_LIST (state, str) {
            state.newList.evaluate_user = state.username;   
            state.newList.evaluate_date = str;            
        },
        RESET_EDIT_LIST(state) {
            var resetList = {}
            resetList.evaluate_id = 1
            resetList.evaluate_store = ''
            resetList.evaluate_menu = ''
            resetList.evaluate_eat = 0
            resetList.evaluate_action = 0
            resetList.evaluate_amount = 0
            resetList.evaluate_experience = ''
            resetList.evaluate_user = ''
            resetList.evaluate_date = ''
            state.newList = resetList
        },
    },
    actions: {
        USER({ commit }, str) {
            commit('SET_USER', str)
        },
        ALERT({ commit }, str) {
            commit('SET_ALERT', str)
            if (str.show == 'add') {
                console.log('str', str)
                commit('RESET_EDIT_LIST')
                commit('SET_EDIT_LIST', timeHandler.getDate())
            }
        },
        EDIT_LIST({ commit }, str) {
            commit('SET_EDIT_LIST')
        },
    },
})
