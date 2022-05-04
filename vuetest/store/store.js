const store = new Vuex.Store({
    state: {
        msg: "",
        member: "",
        loadingMsg: "LOADING",
        searchReceive: {
            startDate: null,
            endDate: null,
        },
    },
    getters: {},
    mutations: {
        SET_MSG(state, str) {
            state.msg = str;
        },
        SET_LOADINGMSG(state, str) {
            state.loadingMsg = str;
        },
        SET_MEMBER(state, strObj) {
            state.member = strObj;
        },
        CHANGE_SHOW(state, str) {
            state.member.receive_state = str;
        },
        SET_SEARCHDATE(state, obj) {
            if (obj.searchState == "start") {
                state.searchReceive.startDate =
                    obj.startYear + "-" + obj.startMonth + "-" + obj.startDay;
            } else if (obj.searchState == "end") {
                state.searchReceive.endDate =
                    obj.endYear + "-" + obj.endMonth + "-" + obj.endDay;
            } else if (obj.searchState == null) {
                state.searchReceive.startDate = null;
                state.searchReceive.endDate = null;
            }
        },
    },
    actions: {
        MSG({ commit }, str) {
            commit("SET_MSG", str);
        },
        MEMBER({ commit }, searchObj) {
            commit("SET_MEMBER", searchObj);
        },
        CHANGE_CHECK_SHOW({ commit }, str) {
            commit("CHANGE_SHOW", str);
        },
        LOADINGMSG({ commit }, str) {
            commit("SET_LOADINGMSG", str);
        },
        CHANGESEARCHDATE({ commit }, searchObj) {
            commit("SET_SEARCHDATE", searchObj);
        },
    },
});
