<style scoped></style>

<template>
	<div class="container">
		<div class="menu">
			<div class="dayinfo">
				<div class="menu_time">1:30</div>
				<div class="menu_temperature msg_right" data-msgr="°F">
					<i v-html="icon_all.sun" class="menu_temperature_sun"></i>
					72
				</div>
			</div>
			<button class="normal_btn menu_close" @click="logoutHandler">
				<i v-html="icon_all.logout"></i>
			</button>
			<div class="menu_note">
				<i v-html="icon_all.bell"></i>
				Extra cool people meeting
				<span>10AM</span>
			</div>
			<ul class="menu_nav">
				<li class="normal_btn menu_nav_li">Weather</li>
				<li class="normal_btn menu_nav_li">Food</li>
				<li class="normal_btn menu_nav_li">Apps</li>
				<li class="normal_btn menu_nav_li">Movies</li>
			</ul>
			<ul class="menu_link">
				<li class="normal_btn menu_link_li">
					<i class="icon _youtube" v-html="icon_all.youtube"></i>
					Hyperplexed
				</li>
			</ul>
		</div>
		<div class="info week">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				How's it look out there?
			</div>
			<ul
				class="week_group scrollX"
				@mousedown="mousedown('scrollX')"
				@touchstart="mousedown('scrollX')"
			>
				<li class="week_group_item" v-for="(weekItem , index) in weekData" :key="index">
					<div class="temperature msg_right" data-msgr="°F">{{weekItem.temperature}}</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">{{weekItem.dayName}}</div>
				</li>
			</ul>
		</div>
		<div class="info food">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				Get it delivered!
			</div>
			<ul class="food_group">
				<li class="food_group_item _burger">
					<div class="txt">
						<span>Burgers</span>
						<span>The best burgers in town</span>
					</div>
				</li>
				<li class="food_group_item _cream">
					<div class="txt">
						<span>Ice Cream</span>
						<span>The worst ice-cream around</span>
					</div>
				</li>
				<li class="food_group_item _pizza">
					<div class="txt">
						<span>Pizza</span>
						<span>This 'Za be gettin down</span>
					</div>
				</li>
				<li class="food_group_item _bbq">
					<div class="txt">
						<span>BBQ</span>
						<span>BBQ ain't need no rhyme</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="info app">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				What's Appening?
			</div>
			<ul class="app_group">
				<li class="app_group_item _cloudly">
					<div class="txt">
						<span>Weather</span>
						<span>Cloudly</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
				<li class="app_group_item _mathio">
					<div class="txt">
						<span>Calc</span>
						<span>Mathio</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
				<li class="app_group_item _cashy">
					<div class="txt">
						<span>Bank</span>
						<span>Cashy</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
				<li class="app_group_item _fly">
					<div class="txt">
						<span>Travel</span>
						<span>Fly-er-io-ly</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
				<li class="app_group_item _game">
					<div class="txt">
						<span>Games</span>
						<span>Gamey</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
				<li class="app_group_item _chatty">
					<div class="txt">
						<span>Video Chat</span>
						<span>Chatty</span>
					</div>
					<i class="icon _cloud_sun" v-html="icon_all.cloud_sun"></i>
				</li>
			</ul>
		</div>
		<div class="info popcorn">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				Popcorn time!
			</div>
			<ul
				class="popcorn_group scrollX"
				@mousedown="mousedown('scrollX')"
				@touchstart="mousedown('scrollX')"
			>
				<li class="popcorn_group_item _protectors">
					<div class="title">Protectors of the Milky Way</div>
					<div class="txt">A tale of some people watching over a large portion of space.</div>
					<i class="icon _galaxy" v-html="icon_all.galaxy"></i>
				</li>
				<li class="popcorn_group_item _people">
					<div class="title">Hole People</div>
					<div class="txt">Some people leave their holes to disrupt some things.</div>
				</li>
				<li class="popcorn_group_item _hair">
					<div class="title">Pot of Hair</div>
					<div
						class="txt"
					>A boy with a dent in his head tries to stop a bad guy. And by bad I mean bad at winning.</div>
				</li>
				<li class="popcorn_group_item _fight">
					<div class="title">Area Fights</div>
					<div
						class="txt"
					>A long drawn out story of some people fighting over some space. Cuz there isn't enough of it.</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			move: {
				nowX: 0,
				startX: 0,
				startY: 0
			},
			weekData: [
				{ temperature: 72, weather: "sun", dayName: "MON" },
				{ temperature: 79, weather: "sun", dayName: "TUES" },
				{ temperature: 71, weather: "cloud", dayName: "WED" },
				{ temperature: 72, weather: "rain", dayName: "THURS" },
				{ temperature: 72, weather: "thunder", dayName: "FRI" },
				{ temperature: 72, weather: "sun", dayName: "SAT" },
				{ temperature: 72, weather: "cloud", dayName: "SUN" }
			]
		};
	},
	mounted() {},
	computed: {},
	methods: {
		mousedown(str, $event) {
			event.currentTarget.id = str;
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
			window.addEventListener("mousemove", this.mouseMove);
			window.addEventListener("mouseup", this.mouseUp);
		},
		mouseUp() {
			let scrollX = document.getElementById("scrollX");
			this.move.nowX = scrollX.scrollLeft;
			scrollX.id = "";
			this.move.nowX = null;
			window.removeEventListener("mousemove", this.mouseMove);
			window.removeEventListener("mouseup", this.mouseUp);
			window.removeEventListener("touchmove", this.mouseMove);
			window.removeEventListener("touchend", this.mouseUp);
		},
		mouseMove($event) {
			let scrollX = document.getElementById("scrollX");
			if (this.move.nowX == null) {
				this.move.nowX = scrollX.scrollLeft;
			}
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
			scrollX.scrollLeft = this.move.nowX + newl * -1;
		},
		logoutHandler() {
			this.$router.push("/");
		}
	}
};
</script>
