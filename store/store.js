const store = Vuex.createStore({
	state: {
		sport_type: null,
		sport: null,
		sportList: [
			{ sport_s: "ft", sport_n: "足球", isShow: true },
			{ sport_s: "bk", sport_n: "籃球 & 美式足球", isShow: true },
			{ sport_s: "es", sport_n: "電子競技", isShow: true },
			{ sport_s: "tn", sport_n: "網球", isShow: true },
			{ sport_s: "vb", sport_n: "排球", isShow: true },
			{ sport_s: "bm", sport_n: "羽毛球", isShow: true },
			{ sport_s: "tt", sport_n: "乒乓球", isShow: true },
			{ sport_s: "bs", sport_n: "棒球", isShow: true },
			{ sport_s: "sk", sport_n: "斯諾克 / 台球", isShow: true },
			{ sport_s: "op", sport_n: "其他", isShow: true },
		],
		isShowMenu: false,
	},
	mutations: {
		set_sport_type(state, str) { state.sport_type = str; },
		set_sport(state, str) { state.sport = str; },
		set_menu(state, boo) { state.isShowMenu = boo; }
	},
	actions: {
		SET_SPORT_TYPE({ commit }, sport_type) { commit('set_sport_type', sport_type); },
		SET_SPORT({ commit }, sport) { commit('set_sport', sport); },
		SET_MENU({ commit }, boo) { commit('set_menu', boo); }
	},
});