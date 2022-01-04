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
        username: 'alex',
        icon_all: icon_all,
    },
    getters: {},
    mutations: {},
    actions: {},
})
