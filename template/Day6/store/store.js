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
        evaluate: [
            {
                evaluate_id: 1,
                evaluate_store: "告胖早午餐-東興店",
                evaluate_menu: "炒麵麵包",
                evaluate_eat: 3,
                evaluate_action: 4,
                evaluate_amount: 4,
                evaluate_experience: "恩恩恩，嘿嘿嘿",
                evaluate_user: "alex",
                evaluate_date: "2012-12-6",
            },
            {
                evaluate_id: 2,
                evaluate_store: "肯德基",
                evaluate_menu: "紐奧良雞",
                evaluate_eat: 5,
                evaluate_action: 4,
                evaluate_amount: 4,
                evaluate_experience: "嘿嘿嘿",
                evaluate_user: "alex",
                evaluate_date: "2012-12-8",
            },
            {
                evaluate_id: 3,
                evaluate_store: "測試炒麵",
                evaluate_menu: "超級大炒麵",
                evaluate_eat: 5,
                evaluate_action: 4,
                evaluate_amount: 4,
                evaluate_experience: "嘿嘿嘿",
                evaluate_user: "alex1",
                evaluate_date: "2012-12-8",
            },
        ],
        // 測試的
        count: 0,
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
            state.editList.evaluate_user = state.username;
            state.editList.evaluate_date = str;
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
    },
    actions: {
        USER({ commit }, str) {
            commit("SET_USER", str);
        },
        ALERT({ commit }, str) {
            commit("SET_ALERT", str);
            if (str.show == "add") {
                console.log("str", str);
                commit("RESET_EDIT_LIST");
                commit("SET_EDIT_LIST", timeHandler.getDate());
            }else if(str.show =='edit'){
                console.log("editstr", str);
            }
        },
        // EDIT_LIST({ commit }, str) {
        //     commit("SET_EDIT_LIST");
        // },
        CREATE_EVALUATE({ commit }, list) {
            this.state.toast.title = "新增成功";
            axios
                .post("/api/setData.php", list)
                .then((res) => {
                    console.log("res.data", res.data);
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
        TOAST({ commit }, str) {
            commit("SET_TOAST", str);
        },
    },
});
