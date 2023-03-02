<style scoped></style>

<template>
	<div :class="['container',loginStyle?'_login':'',showLoading?'showLoading':'']">
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
				<label
					id="label_txt1"
					:class="login_txt.length==0?'focused':''"
					:data-txt="login_txt[0]!==''?login_txt[0]:''"
				>
					<span></span>
				</label>
				<label
					id="label_txt2"
					:class="login_txt.length==1?'focused':''"
					:data-txt="login_txt[1]!==''?login_txt[1]:''"
				>
					<span></span>
				</label>
				<label
					id="label_txt3"
					:class="login_txt.length==2?'focused':''"
					:data-txt="login_txt[2]!==''?login_txt[2]:''"
				>
					<span></span>
				</label>
				<label
					id="label_txt4"
					:class="login_txt.length==3?'focused':''"
					:data-txt="login_txt[3]!==''?login_txt[3]:''"
				>
					<span></span>
				</label>
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
			login_txt: [],
			keycode: {
				48: 0,
				49: 1,
				50: 2,
				51: 3,
				52: 4,
				53: 5,
				54: 6,
				55: 7,
				56: 8,
				57: 9,

				65: "a",
				66: "b",
				67: "c",
				68: "d",
				69: "e",
				70: "f",
				71: "g",
				72: "h",
				73: "i",
				74: "j",
				75: "k",
				76: "l",
				77: "m",
				78: "n",
				79: "o",
				80: "p",
				81: "q",
				82: "r",
				83: "s",
				84: "t",
				85: "u",
				86: "v",
				87: "w",
				88: "x",
				89: "y",
				90: "z",

				96: 0,
				97: 1,
				98: 2,
				99: 3,
				100: 4,
				101: 5,
				102: 6,
				103: 7,
				104: 8,
				109: 9
			},
			loginTimers: {},
			showLoading: false
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
	},
	computed: {},
	methods: {
		loginHandler() {
			window.addEventListener("keydown", this.codetokey);
			this.loginStyle = true;
		},
		cancelHandler() {
			this.loginStyle = false;
			var login_label = document.querySelectorAll(
				".login_input_box label"
			);
			for (let i = 0; i < Object.keys(this.loginTimers).length; i++) {
				clearTimeout(
					this.loginTimers[Object.keys(this.loginTimers)[i]]
				);
			}
			this.loginTimers = {};
			for (let i = 0; i < login_label.length; i++) {
				login_label[i].classList.remove("un");
			}
			this.login_txt = [];
			window.removeEventListener("keydown", this.codetokey);
		},
		codetokey($e) {
			if (
				this.isAlphaNumeric(this.keycode[$e.keyCode]) &&
				this.keycode[$e.keyCode]
			) {
				this.login_txt.push(this.keycode[$e.keyCode]);
				this.login_txt_time();
				if (this.login_txt.length == 4) {
					this.showLoading = true;
					store.dispatch("SETLOADING", true);
					this.checkPass();
				}
			}
		},
		isAlphaNumeric(char) {
			return /^[a-z0-9]+$/i.test(char);
		},
		login_txt_time() {
			var login_label = document.querySelector(
				"#label_txt" + this.login_txt.length
			);
			this.loginTimers[
				"login_label" + this.login_txt.length
			] = setTimeout(() => {
				login_label.classList.add("un");
			}, 1000);
		},
		checkPass() {
			if (
				String(this.login_txt[0]) +
					String(this.login_txt[1]) +
					String(this.login_txt[2]) +
					String(this.login_txt[3]) ==
				"1234"
			) {
				this.$router.push("/home");
			} else {
				for (let i = 0; i < Object.keys(this.loginTimers).length; i++) {
					clearTimeout(
						this.loginTimers[Object.keys(this.loginTimers)[i]]
					);
				}
				this.loginTimers = {};
				var login_label = document.querySelectorAll(
					".login_input_box label"
				);
				for (let i = 0; i < login_label.length; i++) {
					login_label[i].classList.remove("un");
				}
				this.login_txt = [];
				this.loginTimers = {};
				this.showLoading = false;
				store.dispatch("SETLOADING", false);
			}
		}
	}
};
</script>
