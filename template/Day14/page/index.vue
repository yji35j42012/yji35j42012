<style scoped></style>

<template>
	<div :class="['container',loginStyle?'_login':'']" @click="loginHandler">
		<div class="login_info">
			<span class="login_info_time">{{time.hour}}:{{time.min}}</span>
			<span class="login_info_temperature msg_right" data-msgr="°F">82</span>
		</div>
		<button class="login_btn">
			<i class="icon _login" v-html="icon_all.login"></i>
		</button>

		<div class="login_input">
			<div class="login_input_box">
				<label class="focused"></label>
				<label></label>
				<label></label>
				<label></label>
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
			loginStyle: false
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
	},
	computed: {},
	methods: {
		loginHandler() {
			console.log("a");

			// this.loginStyle
			// 	? (this.loginStyle = false)
			// 	: (this.loginStyle = true);
			this.loginStyle = true;
			// this.$router.push("/home");
		},
		cancelHandler($event) {
			console.log("b");
			$event.preventDefault();
			this.loginStyle = false;
		}
	}
};
</script>
