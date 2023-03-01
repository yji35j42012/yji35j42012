<style scoped></style>

<template>
	<div :class="['container',loginStyle?'_login':'']">
		<div class="login_info" @click="loginHandler">
			<div class="login_info_txt">
				<span class="time">{{time.hour}}:{{time.min}}</span>
				<span class="temperature msg_right" data-msgr="°F">82</span>
			</div>
			<button class="login_info_btn">
				<i class="icon _login" v-html="icon_all.login"></i>
			</button>
		</div>

		<div class="login_input">
			<div class="login_input_box">
				<label :class="login_txt.length==0?'focused':''"></label>
				<label :class="login_txt.length==1?'focused':''"></label>
				<label :class="login_txt.length==2?'focused':''"></label>
				<label :class="login_txt.length==3?'focused':''"></label>
			</div>
			<div class="login_input_txt" @click="cancelHandler">Cancel</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			time: {
				hour: 0,
				min: 0
			},
			loginStyle: false,
			login_txt: []
		};
	},
	mounted() {
		var date = new Date();
		this.time.hour =
			date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
		this.time.min =
			date.getMinutes() < 10
				? "0" + date.getMinutes()
				: date.getMinutes();
		// var timer = setInterval(() => {
		//     this.time.hour = date.getHours();
		//     this.time.min = date.getMinutes();
		// }, 1000 * 60);
		document.onkeydown = function(e) {
			console.log("key", e.keyCode);
		};
	},
	computed: {},
	methods: {
		loginHandler() {
			this.loginStyle = true;
		},
		cancelHandler() {
			this.loginStyle = false;
		}
	}
};
</script>
