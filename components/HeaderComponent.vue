<style scoped></style>

<template>
	<div class="header">
		<router-link class="header_link _home" to="/">
			<i class="icon_home" v-html="icon_all.home"></i>
		</router-link>
		<div class="header_menu">
			<router-link class="header_link" to="/live">滾球</router-link>
			<router-link class="header_link" to="/outrights">冠軍</router-link>
		</div>
		<div class="header_info">
			<div class="time">23:56:39</div>
			<router-link class="header_link" to="/result">賽果</router-link>
			<router-link class="header_link" to="/tv">賽程</router-link>
			<router-link class="header_link" to="/history">帳戶歷史</router-link>
			<router-link class="header_link" to="/todaywagers">交易狀況</router-link>
			<div class="acc_money">9,998,068.00 RMB</div>
			<div class="header_menuBtn">
				<i class="icon_menu" v-html="icon_all.menuBtn"></i>
			</div>
		</div>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			icon_all: icon_all,
		}
	},
	computed: {},
	methods: {},
}
</script>
