const store = Vuex.createStore({
	state: {
		sport_type: null,
		sport: null,
	},
	mutations: {
		set_sport_type(state, str) {
			state.sport_type = str;
		},
		set_sport(state, str) {
			state.sport = str;
		},
	},
	actions: {
		SET_SPORT_TYPE({ commit }, sport_type) {
			commit('set_sport_type', sport_type);
		},
		SET_SPORT({ commit }, sport) {
			commit('set_sport', sport);
		},
	},
});