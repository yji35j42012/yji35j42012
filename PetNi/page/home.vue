<style scoped></style>

<template>
	<div id="container" class="container">
		<div class="func">
			<div class="func_box">
				<h2>我想尋找</h2>
				<ul class="func_ul">
					<li
						:class="['square', search.type == 'cat' ? 'on' : '']"
						@click="searchType('cat')"
					>
						<i class="animal" v-html="icon_all.cat"></i>
					</li>
					<li
						:class="['square', search.type == 'dog' ? 'on' : '']"
						@click="searchType('dog')"
					>
						<i class="animal" v-html="icon_all.dog"></i>
					</li>
					<li
						:class="['square', search.type == 'all' ? 'on' : '']"
						@click="searchType('all')"
					>
						不拘
					</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>性別</h2>
				<ul class="func_ul">
					<li
						:class="[
							'square',
							'male',
							search.gender == 'male' ? 'on' : '',
						]"
						@click="searchGender('male')"
					>
						<i class="gender" v-html="icon_all.male"></i>
					</li>
					<li
						:class="[
							'square',
							'female',
							search.gender == 'female' ? 'on' : '',
						]"
						@click="searchGender('female')"
					>
						<i class="gender" v-html="icon_all.female"></i>
					</li>
					<li
						:class="['square', search.gender == 'all' ? 'on' : '']"
						@click="searchGender('all')"
					>
						不拘
					</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>年齡</h2>
				<ul class="func_ul">
					<li
						:class="[search.age == 'child' ? 'on' : '']"
						@click="searchAge('child')"
					>
						幼齡
					</li>
					<li
						:class="[search.age == 'adult' ? 'on' : '']"
						@click="searchAge('adult')"
					>
						成年
					</li>
					<li
						:class="[search.age == 'all' ? 'on' : '']"
						@click="searchAge('all')"
					>
						不拘
					</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>顏色</h2>
				<ul class="func_ul">
					<li>白貓</li>
					<li>黑貓</li>
					<li>乳牛貓</li>
					<li>橘貓</li>
					<li>虎斑貓</li>
					<li>三色貓</li>
					<li>玳瑁貓</li>
					<li class="on">不拘</li>
				</ul>
			</div>
			<div class="func_switch">
				<h2>搜尋附近</h2>
				<label class="switch">
					<input type="checkbox" />
					<span class="switch_ball"></span>
				</label>
			</div>
			<div class="func_switch">
				<h2>互動音效</h2>
				<label class="switch">
					<input type="checkbox" />
					<span class="switch_ball"></span>
				</label>
			</div>
			<button class="btn">套用</button>
		</div>
		<div id="info" class="info">
			<div class="slip">
				<div class="slip_item _noData">
					<span>
						很抱歉！<br />
						已沒有單身狗、單身貓了，<br />
						請嘗試修改篩選條件。
					</span>
				</div>
				<div
					v-for="item in petItem"
					:key="item.animal_id"
					:id="'slip' + item.animal_id"
					class="slip_item"
					@mousedown="slipMouseDown('slip' + item.animal_id)"
					@touchstart="slipMouseDown('slip' + item.animal_id)"
				>
					<img class="" :src="item.album_file" alt="" />
					<button
						class="slip_item_detail"
						@click="detailHandler(item.animal_id)"
						style=""
					>
						!
						<!-- <i v-html="icon_all.detail"></i> -->
					</button>
					<div class="slip_item_box">
						<button
							class="unlike_btn"
							@click="unlikeHandler('slip' + item.animal_id)"
						>
							<i v-html="icon_all.unlike"></i>
						</button>
						<div class="slip_item_info">
							<p class="name female">
								<span>{{ item.animal_id }}</span>
								<i class="gender" v-html="icon_all.female"></i>
							</p>
							<p class="address">{{ item.animal_place }}</p>
						</div>
						<button
							class="like_btn"
							@click="likeHandler('slip' + item.animal_id)"
						>
							<i v-html="icon_all.like"></i>
						</button>
					</div>
				</div>
			</div>
			<ul class="recommend">
				<li>
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
				<li>
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
				<li>
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
			</ul>
		</div>
		<div class="headFunc">
			<button class="backCard" @click="backCard">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
					<path :d="icon_all.back" />
				</svg>
			</button>
			<span class="name">{{ showTitle }}</span>
			<button class="searchBtn">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
					<path :d="icon_all.filter" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			search: {
				type: "all",
				gender: "all",
				age: "all",
			},
			icon_all: icon_all,
			// oldpetData: pet,
			who: "",
			move: {
				startX: "",
				startY: "",
			},
			cardL: "",
			cardT: "",
			moveRotateRight: 0, //移動兼具＋
			rotateNum: 30,
			rotateMaxNum: 45,
			newL: 0,
			totalItem: null,
			scolled: 0,
			likeList: [],
			unlikeList: [],
		};
	},
	components: {
		petinfo: httpVueLoader("../components/PetInfo.vue"),
	},
	mounted() {
		// console.log("state", store.state.petData);
		this.totalItem = store.state.petData.length;
		// axios
		//     .get(
		//         "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
		//     )
		//     .then((res) => {
		//         console.log("test", res.data);
		//         this.oldpetData = res.data;
		//     });

		// axios.get("https://tw.rter.info/capi.php").then((res) => {
		//     console.log("test", res.data);
		//     this.oldpetData = res.data;
		// });
		axios
			.get("https://tw.rter.info/capi.php")
			.then(function(response) {
				let data = response.data;
				console.log("data1111", data);

				// console.log(arguments)
			})
			.catch(function(error) {
				console.log(error);
			})
			.finally(function() {
				console.log("finally");
			});
	},
	computed: {
		showTitle() {
			if (this.totalItem == null) return;
			let show = "";
			if (this.totalItem !== 0 && this.totalItem !== this.scolled) {
				show =
					store.state.petData[this.totalItem - this.scolled - 1]
						.animal_Variety;
			} else if (this.totalItem == this.scolled) {
				show = "沒資料了";
			}
			return show;
		},
		petItem() {
			if (this.totalItem == null) return;
			let showPet = [];
			let randomNumList = [];
			let maxItem = 10; //最多10筆
			var resetRandom = 0;
			// console.log("totalItem", this.totalItem);
			// Math.floor(Math.random() * x);
			for (let i = 0; i < maxItem + resetRandom; i++) {
				var randomNum = Math.floor(Math.random() * this.totalItem);
				// console.log("randomNum", randomNum);
				// console.log("reset", randomNumList.indexOf(randomNum));
				if (randomNumList.indexOf(randomNum) == -1) {
					randomNumList.push(randomNum);
					showPet.push(store.state.petData[randomNum]);
				} else {
					resetRandom++;
				}
			}
			return showPet;
		},
	},
	methods: {
		searchType(str) {
			this.search.type = str;
		},
		searchGender(str) {
			this.search.gender = str;
		},
		searchAge(str) {
			this.search.age = str;
		},
		detailHandler(id) {
			this.$router.push("/home/" + id);
		},
		// 鬆開卡片
		slipMouseUp() {
			console.log("鬆開卡片");
			let outside = document.getElementById("app");
			outside.style = "";
			window.removeEventListener("mousemove", this.slipMouseMove);
			window.removeEventListener("mouseup", this.slipMouseUp);
			window.removeEventListener("touchmove", this.slipMouseMove);
			window.removeEventListener("touchend", this.slipMouseUp);

			let boxW = document.getElementById("info");
			let scrollitem = document.getElementById(this.who);
			let boxWMin = boxW.offsetWidth * (1 / 5);
			let boxWMax = boxW.offsetWidth * (4 / 5);
			let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
			let itemLeft = scrollitem.offsetLeft;

			if (itemCenter + this.newL >= boxWMax) {
				console.log("like", itemCenter, this.newL, boxWMax);
				this.transformHandler(0, 0, -3, 0.5);
				this.addClassHandler(this.who, "like", 10);
				this.scolled++;
			} else if (itemCenter + this.newL <= boxWMin) {
				console.log("unlike", itemCenter, this.newL, boxWMax);
				this.addClassHandler(this.who, "unlike", 10);
				this.scolled++;
			} else {
				// console.log("恢復", itemCenter, this.newL, boxWMax);
				this.transformHandler(0, 0, -3, 0.5);
			}
		},
		// 卡片滑動
		slipMouseMove($event) {
			console.log("卡片滑動");
			let scrollitem = document.getElementById(this.who);
			if (!event.touches) {
				//相容移動端
				$event.preventDefault();
				var nx = event.clientX;
				var ny = event.clientY;
			} else {
				//相容PC端
				var nx = event.touches[0].pageX;
				var ny = event.touches[0].pageY;
			}
			let newl = nx - this.move.startX;
			this.newL = newl;
			let newt = ny - this.move.startY;
			// 程式碼關鍵處
			let boxW = document.getElementById("container");
			let boxWMin = boxW.offsetWidth * (1 / 5);
			let boxWCen = boxW.offsetWidth * (1 / 2);
			let boxWMax = boxW.offsetWidth * (4 / 5);
			let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;

			let rotate = 45 / this.moveRotateRight;
			let nowRotate = rotate * newl + -3;
			if (nowRotate >= this.rotateMaxNum) {
				nowRotate = this.rotateMaxNum;
			} else if (nowRotate <= -this.rotateMaxNum) {
				nowRotate = -this.rotateMaxNum;
			}
			this.transformHandler(newl, newt, nowRotate, 0);
		},
		// 按下卡片
		slipMouseDown(str, $event) {
			console.log("按下卡片", str);
			this.who = str;
			this.move.startX = event.clientX;
			this.newL = 0;
			// 點擊位置
			if (!event.touches) {
				//相容移動端
				this.move.startX = event.clientX;
				this.move.startY = event.clientY;
			} else {
				//相容PC端
				this.move.startX = event.touches[0].pageX;
				this.move.startY = event.touches[0].pageY;
			}
			let scrollitem = document.getElementById(str);
			let boxW = document.getElementById("container");
			window.addEventListener("mousemove", this.slipMouseMove);
			window.addEventListener("mouseup", this.slipMouseUp);
			window.addEventListener("touchmove", this.slipMouseMove);
			window.addEventListener("touchend", this.slipMouseUp);

			this.cardL = scrollitem.offsetLeft;
			this.cardT = scrollitem.offsetTop;
			let boxWMax = boxW.offsetWidth * (4 / 5);
			let boxWTotal = boxW.offsetWidth;
			if (boxWTotal > 768) {
				this.rotateNum = 30;
				this.rotateMaxNum = 45;
			} else {
				this.rotateNum = 10;
				this.rotateMaxNum = 15;
			}
			let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
			this.moveRotateRight = boxWMax - itemCenter;
			this.transformHandler(0, 0, -3, 0);
		},
		transformHandler(x, y, rotate, time) {
			let scrollitem = document.getElementById(this.who);
			scrollitem.style = `transform: translate3d(${x}px ,${y}px , 0) rotate(${rotate}deg); transition-duration: ${time}s;`;
		},
		unlikeHandler(str) {
			// console.log("unlikeHandler", str);
			this.addClassHandler(str, "unlike", 10);
			this.recordUnLike();
			this.scolled++;
		},
		likeHandler(str) {
			this.addClassHandler(str, "like", 10);
			this.recordLike();
			this.scolled++;
		},
		addClassHandler(who, what, when) {
			let addObj = document.getElementById(who);
			setTimeout(() => {
				addObj.classList.add(what);
			}, when);
		},
		backCard() {
			let returnId = this.totalItem - this.scolled;
			if (this.scolled == 0) return;
			let removeObj = document.getElementById("slip" + returnId);
			if (removeObj.classList.contains("like")) {
				removeObj.classList.remove("like");
				this.scolled--;
			} else if (removeObj.classList.contains("unlike")) {
				removeObj.classList.remove("unlike");
				this.scolled--;
			} else {
				console.log("來亂？");
			}
		},
		recordLike() {
			this.likeList.push(this.who.split("slip")[1]);
		},
		recordUnLike() {
			this.unlikeList.push(this.who.split("slip")[1]);
		},
	},
};
</script>
