<style scoped></style>

<template>
    <div id="tbBox" class="tbBox">
        <div class="tbBox_function">
            <button class="normal_btn _add" @click="addHandler('addedit')">
                新增
            </button>
            <!-- <button class="normal_btn _add" @click="storage('get')">
						顯示storage
					</button> -->
            <button class="normal_btn _add" @click="storage('del')">
                刪除storage
            </button>
            <input
                type="text"
                class="normal_inp"
                v-model="filiterInp"
                placeholder="隨便搜"
            />
        </div>
        <div id="scroll_y" class="scroll_y">
            <div class="tbBox_head">
                <table id="tbHead" class="min_1280">
                    <tr>
                        <th width="10%">店名</th>
                        <th width="10%">今天點什麼</th>
                        <th width="10%">好吃嗎</th>
                        <th width="10%">動作快速嗎</th>
                        <th width="10%">夠吃嗎</th>
                        <th width="20%">心得</th>
                        <th width="10%">填寫人</th>
                        <th width="10%">日期</th>
                        <th width="10%">功能</th>
                    </tr>
                </table>
            </div>
            <div class="tbBox_body" id="tbBody">
                <table class="min_1280" @touchstart="slipMouseDown()">
                    <tr v-for="(item, index) in evaluate_list" :key="index">
                        <td width="10%">{{ item.evaluate_store }}</td>
                        <td width="10%">{{ item.evaluate_menu }}</td>
                        <td width="10%">{{ item.evaluate_eat }}</td>
                        <td width="10%">
                            {{ actionList[item.evaluate_action] }}
                        </td>
                        <td width="10%">
                            {{ item.evaluate_amount }}
                        </td>
                        <td width="20%">
                            {{ item.evaluate_experience }}
                        </td>
                        <td width="10%">{{ item.evaluate_user }}</td>
                        <td width="10%">{{ item.evaluate_date }}</td>
                        <td width="10%">
                            <button
                                v-if="item.evaluate_user == username"
                                class="icon_btn material-icons"
                                @click="
                                    editHandler(
                                        'addedit',
                                        item.evaluate_id,
                                        index
                                    )
                                "
                            >
                                edit
                            </button>
                            <!-- <i class="far fa-trash-alt ms-text-danger"></i> -->
                            <button
                                v-if="item.evaluate_user == username"
                                class="icon_btn material-icons"
                                @click="delHandler(item.evaluate_id, index)"
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            menu: {
                now: "wh",
            },
            actionList: [
                "請選擇",
                "5-10分送達",
                "10-20分送達",
                "20-30分送達",
                "30分以上送達",
                "預定 - 有準時送達",
                "預定 - 沒有準時",
            ],
            evaluateIn: [],
            alertShow: false,
            alertTitle: "",
            msgShow: false,
            msgState: "",
            msgInfo: [],
            index: null,
            num: null,
            filiterInp: "",
            calendar: {
                func: null,
                show: false,
                olympic: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                normal: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                monthName: [
                    "January",
                    "Febrary",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "Auguest",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                year: {
                    now: null,
                    search: null,
                },
                month: {
                    now: null,
                    search: null,
                    str: null,
                },
                day: {
                    search: null,
                },
                chose: null,
                showTd: [],
                mList: [],
            },
            scrollX: 0,
        };
    },
    mounted() {
        // 使用者名稱
        // var storage = localStorage.getItem('experience')
        // if (storage == null) {
        //     this.alertShow = true;
        //     this.addClassHandler("inp");
        // } else {
        //     this.username = storage;
        // }
        // 使用者名稱

        // 日期初始化
        var my_date = new Date();
        this.calendar.year = {
            now: my_date.getFullYear(),
            search: my_date.getFullYear(),
        };
        this.calendar.month = {
            now: my_date.getMonth(),
            search: my_date.getMonth(),
            str: this.calendar.monthName[my_date.getMonth()],
        };
        this.calendar.day = {
            now: null,
            search: my_date.getDate(),
        };
        this.calendar.chose = {
            year: null,
            mon: null,
            day: null,
        };
        // 日期初始化
        // this.username = store.state.username;
        store.dispatch("READ_EVALUATE");
    },
    computed: {
        evaluate_list() {
            return store.state.evaluate.filter((item) => {
                return (
                    item.evaluate_menu.indexOf(this.filiterInp) !== -1 ||
                    item.evaluate_store.indexOf(this.filiterInp) !== -1
                );
            });
        },
        username() {
            return store.state.username;
        },
        // calendar_list() {
        //     return this.calendar.showTd;
        // },
    },
    methods: {
        moveTBhead() {
            var tbHead = document.getElementById("tbHead");
            var tbBody = document.getElementById("tbBody");
            this.scrollX = tbBody.scrollLeft;
            tbHead.style.marginLeft = this.scrollX * -1 + "px";
        },
        // 鬆開卡片
        slipMouseUp() {
            // console.log("鬆開卡片");
            // tbHead.style.marginLeft = * -1 + "px";
            let setT = setInterval(() => {
                if (tbBody.scrollLeft !== this.scrollX) {
                    this.moveTBhead();
                } else {
                    clearInterval(setT);
                }
            }, 20);
        },
        // 卡片滑動
        slipMouseMove($event) {
            this.moveTBhead();
        },
        // 按下卡片
        slipMouseDown($event) {
            // console.log("按下表格");
            var tbBody = document.getElementById("tbBody");
            this.scrollX = tbBody.scrollLeft;
            window.addEventListener("mousemove", this.slipMouseMove);
            window.addEventListener("mouseup", this.slipMouseUp);
            window.addEventListener("touchmove", this.slipMouseMove);
            window.addEventListener("touchend", this.slipMouseUp);
        },
        addHandler(str) {
            store.dispatch("ALERT", {
                title: "新增",
                show: "add",
            });
            this.addClassHandler(str);
        },
        editHandler(str, num, i) {
            store.dispatch("ALERT", {
                title: "修改",
                show: "edit",
                id: num,
                index: i,
            });
            this.addClassHandler(str);
        },
        delHandler(num, index) {
            console.log(num);
            store.dispatch("MSG", {
                msgTxt: ["確認刪除嗎？"],
                msgState: "del",
                delId: num,
            });
            // this.msgInfo.push("確認刪除嗎？");
            // this.msgShow = true;
            // this.addClassHandler("msg");
            // this.msgState = "del";
            // this.index = index;
            // this.num = num;
        },
        addClassHandler(str) {
            setTimeout(() => {
                var addClass = document.getElementById(str);
                if (addClass.classList.contains("show")) {
                    addClass.classList.remove("show");
                    setTimeout(() => {
                        addClass.classList.add("show");
                    }, 10);
                } else {
                    addClass.style.display = "block";
                    setTimeout(() => {
                        addClass.classList.add("show");
                    }, 10);
                }
            }, 0);
        },
        storage(str) {
            if (str == "del") {
                localStorage.removeItem("experience");
            } else if (str == "get") {
                console.log(localStorage.getItem("experience"));
            }
        },
        /*
					cancel() {
						if (this.msgState == 'back') {
							this.msgState = ''
						} else if (this.msgState == 'del') {
							this.msgState = ''
							this.index = null
							this.num = null
						} else {
							this.alertShow = false
						}
						this.msgShow = false
						this.msgInfo = []
					},
					submit(str) {
						if (str == 'addItem') {
							console.log(this.msgInfo)
							if (this.newList.evaluate_store == '') {
								this.msgInfo.push('請填寫店名')
							}
							if (this.newList.evaluate_menu == '') {
								this.msgInfo.push('請填寫點什麼')
							}
							if (this.newList.evaluate_eat == '') {
								this.msgInfo.push('好不好粗請給分～')
							}
							if (this.newList.evaluate_amount == '') {
								this.msgInfo.push('吃的飽不飽請給分～')
							}
							if (this.newList.evaluate_user == '') {
								this.msgInfo.push('請告訴我你是誰')
							}
							if (this.newList.evaluate_user == '') {
								this.msgInfo.push('請寫一下日期')
							}
							if (this.msgInfo.length !== 0) {
								console.log(this.msgInfo.length)
								this.msgShow = true
								this.addClassHandler('msg')
								this.msgState = 'back'
							} else {
								if (this.alertShow == 'add') {
									console.log('新增送出')
									this.newList.id = this.evaluate.length
									this.evaluate.push(this.newList)
									this.msgInfo.push('新增成功')
									this.msgShow = true
									this.addClassHandler('msg')
									this.msgState = 'ok'
									this.newList
									axios
										.post('/api/setData.php', this.newList)
										.then((res) => {
											console.table(res.data)
										})
										.catch((error) => {
											console.error(error)
										})
								} else if (this.alertShow == 'edit') {
									console.log('修改送出')
									this.evaluate.splice(this.index, 1, this.newList)
									this.msgInfo.push('修改成功')
									this.msgShow = true
									this.addClassHandler('msg')
									this.msgState = 'ok'
									this.newList
									console.log(this.newList)
			
									axios
										.post('/api/updateData.php', this.newList)
										.then((res) => {
											console.table(res.data)
										})
										.catch((error) => {
											console.error(error)
										})
								}
			
								this.setNewlist()
							}
						} else if (str == 'user' && this.username !== '') {
							this.alertShow = false
							localStorage.setItem('experience', this.username)
						}
					},
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
			 
					star(str, num) {
						var addClass = document.querySelectorAll("[name='" + str + "']")
						for (let i = 0; i < 5; i++) {
							addClass[i].classList.remove('on')
						}
						for (var i = 0; i <= 5 - num; i++) {
							addClass[5 - i - 1].classList.add('on')
						}
						if (str == 'eat') {
							this.newList.evaluate_eat = 6 - num
						} else if (str == 'amount') {
							this.newList.evaluate_amount = 6 - num
						}
					},
					selHandler(str) {
						var addClass = document.getElementById(str)
						if (addClass.classList.contains('show')) {
							addClass.classList.remove('show')
						} else {
							this.addClassHandler(str)
						}
					},
					removeClassHandler(str) {
						var removeClass = document.getElementById(str)
						removeClass.classList.remove('show')
						setTimeout(() => {
							this.calendar.show = false
						}, 350)
					},
					selLi(num) {
						this.newList.evaluate_action = num
					},
				   
			
					checkHandler() {
						axios
							.post('/api/delData.php', this.num)
							.then((res) => {
								console.table(res.data)
							})
							.catch((error) => {
								console.error(error)
							})
						this.evaluate.splice(this.index, 1)
						this.cancel()
						this.addClassHandler('msg')
						setTimeout(() => {
							this.msgInfo.push('刪除成功')
							this.msgShow = true
							this.addClassHandler('msg')
							this.msgState = 'back'
						}, 10)
					},
					dateHandler() {
						this.calendar.show = true
						this.calendar.showTd = []
						if (this.calendar.chose == null) {
							this.createDate()
						}
			
						this.refreshDate(
							this.calendar.year.search,
							this.calendar.month.search
						)
						this.addClassHandler('calendar')
					},
					refreshDate(searchY, searchM) {
						var my_date = new Date()
						var my_day = my_date.getDate()
						var lastTotalDay //上月總天數
			
						var lastTotalDay = this.daysTotal(
							searchM - 1 < 0 ? 0 : searchM - 1,
							searchY
						)
						var totalDay = this.daysTotal(searchM, searchY) //當月總天數
						var firstDay = this.dayStart(searchM, searchY) //當月第一天星期
			
						var m = 0
						if (this.calendar.chose.day == null) {
							this.calendar.chose = {
								year: this.calendar.year.now,
								mon: this.calendar.month.now,
								day: my_date.getDate(),
							}
						}
						// 第一天前
						for (var i = 1; i < firstDay; i++) {
							m++
							this.calendar.mList.push({
								year: searchM == 0 ? searchY - 1 : searchY,
								mon: searchM - 1 < 0 ? 11 : searchM - 1,
								day: lastTotalDay - firstDay + i + 1,
							})
						}
						// 本月份
						for (var i = 1; i <= totalDay; i++) {
							if (m == 7) {
								m = 0
								this.calendar.showTd.push(this.calendar.mList)
								this.calendar.mList = []
							}
							m++
							this.calendar.mList.push({
								year: searchY,
								mon: searchM,
								day: i,
							})
						}
						var l = m
						// 補齊後面天數
						if (m <= 7) {
							for (let i = 1; i < 8 - l; i++) {
								this.calendar.mList.push({
									year: searchM == 11 ? searchY + 1 : searchY,
									mon: searchM + 1 == 12 ? '0' : searchM + 1,
									day: i,
								})
								m++
							}
						}
						this.calendar.showTd.push(this.calendar.mList)
						this.calendar.mList = []
			
						if (
							this.calendar.chose.year == searchY &&
							this.calendar.chose.mon == searchM
						) {
							setTimeout(() => {
								var chose = document.querySelectorAll(
									'[name="calendar_td"]'
								)
			
								chose[this.calendar.chose.day - 1].classList.add('chose')
								this.calendar.mList = []
							}, 10)
						} else {
							var chose = document.querySelectorAll('[name="calendar_td"]')
							for (let i = 0; i < chose.length; i++) {
								chose[i].classList.remove('chose')
							}
						}
					},
					calendarHandler(y, m, d) {
						console.log(y, m, d)
						this.calendar.chose = {
							year: y,
							mon: parseInt(m),
							day: d,
						}
						this.calendar.year.search = y
						this.calendar.month.search = parseInt(m)
						this.calendar.month.str = this.calendar.monthName[m]
			
						m = parseInt(m) + 1
						this.newList.evaluate_date = y + '-' + m + '-' + d
			
						this.removeClassHandler('calendar')
					},
					daysTotal(month, year) {
						var tmp = year % 4
						if (tmp == 0) {
							return this.calendar.olympic[month]
						} else {
							return this.calendar.normal[month]
						}
					},
					dayStart(month, year) {
						var tmpDate = new Date(year, month, 1)
						return tmpDate.getDay()
					},
					calendar_prev() {
						console.log('prev')
						this.calendar.showTd = []
						this.calendar.func = 'pn'
						var searchY = this.calendar.year
						var searchM = this.calendar.month
						if (searchM.search == 0) {
							searchY.search--
							searchM.search = 11
						} else {
							searchM.search--
						}
						searchM.str = this.calendar.monthName[searchM.search]
						this.refreshDate(searchY.search, searchM.search)
					},
					calendar_next() {
						console.log('next')
						this.calendar.showTd = []
						this.calendar.func = 'pn'
						var searchY = this.calendar.year
						var searchM = this.calendar.month
						if (searchM.search == 11) {
							searchY.search++
							searchM.search = 0
						} else {
							searchM.search++
						}
						searchM.str = this.calendar.monthName[searchM.search]
						this.refreshDate(searchY.search, searchM.search)
					},
					createDate() {
						this.calendar.showTd = []
					},
					menuHandler(str) {
						if (this.menu.now == str) return
						this.menu.now = str
					},
			
					*/
    },
};
</script>
