const timeHandler = {
    getDate() {
        let year = new Date().getFullYear();
        let mounth = new Date().getMonth() + 1;
        if (mounth < 9) {
            mounth = "0" + mounth;
        }
        let date = new Date().getDate();
        if (date < 9) {
            date = "0" + date;
        }
        return year + "-" + mounth + "-" + date;
    },
};

const store = new Vuex.Store({
    state: {
        username: null,
        toast: {
            title: null,
        },
        alert: {
            show: null,
            title: null,
        },
        editList: {
            evaluate_id: "",
            evaluate_store: "告胖早午餐-東興店",
            evaluate_menu: "",
            evaluate_eat: "",
            evaluate_action: 0,
            evaluate_amount: "",
            evaluate_experience: "",
            evaluate_user: "",
            evaluate_date: "",
        },
        evaluate: [],
        // 測試的
        count: 0,
        msgInfo: {
            msgTxt: [],
            msgState: null,
        },
        delID: null,
    },
    getters: {},
    mutations: {
        increment() {
            console.log("++");
            this.state.count++;
        },
        ddddd() {
            console.log("-....-");
            this.state.count--;
        },
        SET_USER(state, str) {
            state.username = str;
        },
        SET_ALERT(state, str) {
            state.alert = str;
        },
        SET_EDIT_LIST(state, str) {
            if (state.alert.show == "add") {
                state.editList.evaluate_user = state.username;
                state.editList.evaluate_date = str;
            } else if ((state.alert.show = "edit")) {
                state.editList.evaluate_id = str.evaluate_id;
                state.editList.evaluate_store = str.evaluate_store;
                state.editList.evaluate_menu = str.evaluate_menu;
                state.editList.evaluate_eat = str.evaluate_eat;
                state.editList.evaluate_action = str.evaluate_action;
                state.editList.evaluate_amount = str.evaluate_amount;
                state.editList.evaluate_experience = str.evaluate_experience;
                state.editList.evaluate_user = str.evaluate_user;
                state.editList.evaluate_date = str.evaluate_date;
            }
        },
        RESET_EDIT_LIST(state) {
            var resetList = {};
            resetList.evaluate_id = 1;
            resetList.evaluate_store = "";
            resetList.evaluate_menu = "";
            resetList.evaluate_eat = 0;
            resetList.evaluate_action = 0;
            resetList.evaluate_amount = 0;
            resetList.evaluate_experience = "";
            resetList.evaluate_user = "";
            resetList.evaluate_date = "";
            state.editList = resetList;
        },
        SET_EVALUATE(state, list) {
            state.evaluate = list;
        },
        SET_TOAST(state, str) {
            state.toast.title = str;
        },
        SET_MSG(state, str) {
            state.msgInfo = str;
        },
    },
    actions: {
        USER({ commit }, str) {
            commit("SET_USER", str);
        },
        ALERT({ commit }, str) {
            commit("SET_ALERT", str);
            if (str.show == "add") {
                commit("RESET_EDIT_LIST");
                commit("SET_EDIT_LIST", timeHandler.getDate());
            } else if (str.show == "edit") {
                this.state.evaluate.forEach((item, index) => {
                    if (str.id == item.evaluate_id) {
                        commit("SET_EDIT_LIST", item);
                    }
                });
            }
        },
        MSG({ commit }, str) {
            commit("SET_MSG", str);
        },
        CREATE_EVALUATE({ commit }, list) {
            axios
                .post("/api/setData.php", list)
                .then((res) => {
                    var list = [];
                    res.data.forEach((item) => {
                        list.push({
                            evaluate_id: item[0],
                            evaluate_store: item[1],
                            evaluate_menu: item[2],
                            evaluate_eat: item[3],
                            evaluate_action: item[4],
                            evaluate_amount: item[5],
                            evaluate_experience: item[6],
                            evaluate_user: item[7],
                            evaluate_date: item[8],
                        });
                    });
                    commit("SET_EVALUATE", list);
                    this.state.toast.title = "新增成功";
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        UPDATE_EVALUATE({ commit }, list) {
            console.log("UPDATE_EVALUATE", list);
            axios
                .post("/api/updateData.php", list)
                .then((res) => {
                    commit("SET_TOAST", "修改成功");
                    var list = [];
                    res.data.forEach((item) => {
                        list.push({
                            evaluate_id: item[0],
                            evaluate_store: item[1],
                            evaluate_menu: item[2],
                            evaluate_eat: item[3],
                            evaluate_action: item[4],
                            evaluate_amount: item[5],
                            evaluate_experience: item[6],
                            evaluate_user: item[7],
                            evaluate_date: item[8],
                        });
                    });
                    commit("SET_EVALUATE", list);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        READ_EVALUATE({ commit }) {
            axios({
                method: "get",
                url: "/api/getData.php",
                "Content-Type": "application/json",
            })
                .then((res) => {
                    var list = [];
                    res.data.forEach((item) => {
                        list.push({
                            evaluate_id: item[0],
                            evaluate_store: item[1],
                            evaluate_menu: item[2],
                            evaluate_eat: item[3],
                            evaluate_action: item[4],
                            evaluate_amount: item[5],
                            evaluate_experience: item[6],
                            evaluate_user: item[7],
                            evaluate_date: item[8],
                        });
                    });
                    commit("SET_EVALUATE", list);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        DELETE_EVALUATE({ commit }) {
            axios
                .post("/api/delData.php", this.state.msgInfo.delId)
                .then((res) => {
                    console.log(res.data);
                    commit("SET_TOAST", "刪除成功");
                    var list = [];
                    res.data.forEach((item) => {
                        list.push({
                            evaluate_id: item[0],
                            evaluate_store: item[1],
                            evaluate_menu: item[2],
                            evaluate_eat: item[3],
                            evaluate_action: item[4],
                            evaluate_amount: item[5],
                            evaluate_experience: item[6],
                            evaluate_user: item[7],
                            evaluate_date: item[8],
                        });
                    });
                    commit("SET_EVALUATE", list);
                    commit("SET_MSG", {
                        msgTxt: [],
                        msgState: null,
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        TOAST({ commit }, str) {
            commit("SET_TOAST", str);
        },
    },
});
