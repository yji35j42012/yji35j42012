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
						<i class="animal">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 36 36"
							>
								<path :d="icon_all.cat" />
							</svg>
						</i>
					</li>
					<li
						:class="['square', search.type == 'dog' ? 'on' : '']"
						@click="searchType('dog')"
					>
						<i class="animal">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 36 36"
							>
								<path :d="icon_all.dog" />
							</svg>
						</i>
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
						<i class="gender">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path :d="icon_all.male" />
							</svg>
						</i>
					</li>
					<li
						:class="[
							'square',
							'female',
							search.gender == 'female' ? 'on' : '',
						]"
						@click="searchGender('female')"
					>
						<i class="gender">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path :d="icon_all.female" />
							</svg>
						</i>
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
		<div class="headFunc">
			<button class="backCard" @click="backCard">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
					<path :d="icon_all.back" />
				</svg>
			</button>
			<span class="name">
				{{ showTitle }}
			</span>
			<button class="searchBtn">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
					<path :d="icon_all.filter" />
				</svg>
			</button>
		</div>
		<div class="info">
			<div class="slip">
				<div class="slip_item _noData">
					<span>
						很抱歉！<br />已沒有單身狗、單身貓了，<br />請嘗試修改篩選條件。
					</span>
				</div>
				<div
					v-for="(item, index) in petItem"
					:key="index"
					:id="'slip' + index"
					class="slip_item"
					@mousedown="slipMouseDown('slip' + index)"
					@touchstart="slipMouseDown('slip' + index)"
				>
					<img :src="item.album_file" alt="" />
					<button
						class="slip_item_detail"
						@click="detailHandler('123')"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 51 51"
						>
							<path :d="icon_all.detail" />
						</svg>
					</button>
					<div class="slip_item_box">
						<button
							class="unlike_btn"
							@click="unlikeHandler('slip' + index)"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 25 25"
							>
								<path :d="icon_all.unlike" />
							</svg>
						</button>
						<div class="slip_item_info">
							<p class="name female">
								<span>{{ item.animal_id }}</span>
								<i class="gender">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path :d="icon_all.female" />
									</svg>
								</i>
							</p>
							<p class="address">{{ item.animal_place }}</p>
						</div>
						<button
							class="like_btn"
							@click="likeHandler('slip' + index)"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
							>
								<path :d="icon_all.like" />
							</svg>
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
			who: "",
			startX: "",
			startY: "",
			cardL: "",
			cardT: "",
			moveRotateRight: 0, //移動兼具＋
			oldpetData: pet,
			rotateNum: 30,
			rotateMaxNum: 45,
			newL: 0,
			totalItem: 0,
			scolled: 0,
		};
	},
	components: {
		petinfo: httpVueLoader("../components/PetInfo.vue"),
	},
	mounted() {
		this.totalItem = this.oldpetData.length;
		// axios
		//     .get(
		//         "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
		//     )
		//     .then((res) => {
		//         console.log("test", res.data);
		//         this.oldpetData = res.data;
		//     });
	},
	computed: {
		showTitle() {
			let show = "";
			if (this.totalItem !== 0 && this.totalItem !== this.scolled) {
				show = this.oldpetData[this.totalItem - this.scolled - 1]
					.animal_Variety;
			} else if (this.totalItem == this.scolled) {
				show = "沒資料了";
			}
			return show;
		},
		petItem() {
			// console.log("totalItem", this.totalItem);
			// console.log("scolled", this.scolled);
			// console.log(
			//     "txt",
			//     this.oldpetData[this.totalItem - this.scolled].animal_Variety
			// );
			return this.oldpetData;
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
			this.$router.push("/detail");
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

			let boxW = document.getElementById("container");
			let scrollitem = document.getElementById(this.who);
			let boxWMin = boxW.offsetWidth * (1 / 5);
			let boxWMax = boxW.offsetWidth * (4 / 5);
			let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
			let itemLeft = scrollitem.offsetLeft;

			if (itemCenter + this.newL >= boxWMax) {
				console.log("like");
				this.transformHandler(0, 0, -3, 0.5);
				this.addClassHandler(this.who, "like", 10);
				this.scolled++;
			} else if (itemCenter + this.newL <= boxWMin) {
				console.log("unlike");
				this.addClassHandler(this.who, "unlike", 10);
				this.scolled++;
			} else {
				console.log("回赴");
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

			let newl = nx - this.startX;
			this.newL = newl;
			let newt = ny - this.startY;
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
			console.log("按下卡片");
			this.who = str;
			this.startX = event.clientX;
			// 點擊位置
			if (!event.touches) {
				//相容移動端
				this.startX = event.clientX;
				this.startY = event.clientY;
			} else {
				//相容PC端
				this.startX = event.touches[0].pageX;
				this.startY = event.touches[0].pageY;
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
			console.log("unlikeHandler", str);
			this.addClassHandler(str, "unlike", 10);
			this.scolled++;
		},
		likeHandler(str) {
			this.addClassHandler(str, "like", 10);
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
	},
};
</script>
