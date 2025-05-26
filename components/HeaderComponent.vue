<style scoped></style>

<template>
	<div id="header" class="header">
		<div :class="['header_link _home', r_sport_type == '' ? 'on' : '']" @click="page('')">
			<i class="icon_home" v-html="icon_all.home"></i>
		</div>
		<div class="header_menu">
			<div :class="['header_link', r_sport_type == 'live' ? 'on' : '']" @click="page('live')">滾球</div>
			<div :class="['header_link', r_sport_type == 'soon' ? 'on' : '']" @click="page('soon')">即將開賽</div>
			<div :class="['header_link', r_sport_type == 'hot' ? 'on' : '']" @click="page('hot')">熱門</div>
			<div class="header_link">今日</div>
			<div class="header_link">早盤</div>
			<div :class="['header_link', r_sport_type == 'outrights' ? 'on' : '']" @click="page('outrights')">冠軍</div>
			<div class="header_link">綜合過關</div>
			<div class="header_link">虛擬賽事</div>
		</div>
		<div class="header_info">
			<div class="time">23:56:39</div>
			<div :class="['header_link', r_sport_type == 'result' ? 'on' : '']" @click="page('result')">賽果</div>
			<div :class="['header_link', r_sport_type == 'tv' ? 'on' : '']" @click="page('tv')">賽程</div>
			<div :class="['header_link', r_sport_type == 'history' ? 'on' : '']" @click="page('history')">帳戶歷史</div>
			<div :class="['header_link', r_sport_type == 'todaywagers' ? 'on' : '']" @click="page('todaywagers')">交易狀況
			</div>
			<acc-component></acc-component>
			<div class="header_menuBtn" @click="menuHandler"><i class="icon_menu" v-html="icon_all.menuBtn"></i></div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			sport_type: null,
		}
	},
	created() {
	},
	computed: {
		r_sport_type() {
			return this.$store.state.sport_type;
		},
	},
	components: {
		'acc-component': Vue.defineAsyncComponent(() => loadModule('./components/AccComponent.vue', options)),
	},
	methods: {
		page(p) {
			var sport = this.$store.state.sport;
			if (p == '') { this.$router.push("/"); }
			else if (sport == null) { this.$router.push("/" + p + "/sc"); }
			else if (p == 'result') { this.$router.push("/" + p); }
			else if (p == 'tv') { this.$router.push("/" + p); }
			else if (p == 'history') { this.$router.push("/" + p); }
			else if (p == 'todaywagers') { this.$router.push("/" + p); }
			else if (p == 'soon') { this.$router.push("/" + p); }
			else if (p == 'hot') { this.$router.push("/" + p); }
			else { this.$router.push("/" + p + "/" + sport); }
		},
		menuHandler() {
			this.$store.dispatch('SET_MENU', true);
		}
	},
}
</script>
