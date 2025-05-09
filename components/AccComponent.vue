<style scoped></style>

<template>
	<i :class="['acc_eyes', isShowEyes ? '_off' : '']" @click="eyesHandler"></i>
	<div class="acc_info">
		<div class="acc_info_name" data-txt="abc">alex00</div>
		<div class="acc_info_money" :data-currency="currency">{{ money }}</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			isShowEyes: false,
			money: "顯示帳戶金額",
			currency: ""
		}
	},
	created() { },
	computed: {},
	methods: {
		eyesHandler() {
			this.isShowEyes = !this.isShowEyes;
			if (this.isShowEyes) {
				this.money = "9,560.00";
				this.currency = "RMB";
			} else {
				this.money = "顯示帳戶金額";
				this.currency = "";
			}
		}
	},
}
</script>
