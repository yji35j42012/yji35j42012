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
			<button class="normal_btn menu_close">
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
		<div class="info _week">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				How's it look out there?
			</div>
			<ul
				class="info_group"
				@mousedown="mousedown('scrollX')"
				@touchstart="mousedown('scrollX')"
			>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">MON</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
				<li class="info_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day">TUES</div>
				</li>
			</ul>
		</div>
		<div class="info _food">
			<div class="info_title">
				<i v-html="icon_all.sun"></i>
				Get it delivered!
			</div>
			<ul class="info_group">
				<li class="info_group_item"></li>
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
				startX: 0,
				startY: 0
			}
		};
	},
	mounted() {},
	computed: {},
	methods: {
		mousedown(str, $event) {
			console.log("scrollX");
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
			scrollX.scrollLeft = "5";
			scrollX.id = "";
			window.removeEventListener("mousemove", this.mouseMove);
			window.removeEventListener("mouseup", this.mouseUp);
			window.removeEventListener("touchmove", this.mouseMove);
			window.removeEventListener("touchend", this.mouseUp);
		},
		mouseMove() {
			console.log("adsf");
		}
	}
};
</script>
