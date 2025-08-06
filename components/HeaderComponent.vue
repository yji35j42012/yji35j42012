<style scoped></style>

<template>
	<div id="header" class="header">
		<div :class="['header_link _home', r_sport_type == '' ? 'on' : '']" @click="page('')">
			<!-- <i class="icon_home" v-html="icon_all.home"></i> -->
			<icon-all icon_name="icon_home"></icon-all>
		</div>
		<div class="header_menu">
			<div v-for="item in r_header_menu" :class="['header_link', r_sport_type == item.h_type ? 'on' : '']"
				@click="page(item.h_type)">
				{{ item.h_name }}
			</div>
		</div>
		<div class="header_info">
			<div class="time">23:56:39</div>
			<div :class="['header_link', r_sport_type == 'result' ? 'on' : '']" @click="page('result')">賽果</div>
			<div :class="['header_link', r_sport_type == 'tv' ? 'on' : '']" @click="page('tv')">賽程</div>
			<div :class="['header_link', r_sport_type == 'doc' ? 'on' : '']" @click="page('doc/todaywagers')">投注記錄</div>
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
			h_menu: [
				{ h_type: "digimon", h_name: "數碼" },
				{ h_type: "sudoku", h_name: "數獨" },
				{ h_type: "live", h_name: "滾球" },
				{ h_type: "soon", h_name: "即將開賽" },
				{ h_type: "hot", h_name: "熱門" },
				{ h_type: "today", h_name: "今日" },
				{ h_type: "early", h_name: "早盤" },
				{ h_type: "outrights", h_name: "冠軍" },
				{ h_type: "parlay", h_name: "綜合過關" },
				{ h_type: "virtual", h_name: "虛擬賽事" },
			],
		}
	},
	created() {
	},
	computed: {
		r_sport_type() {
			return this.$store.state.sport_type;
		},
		r_header_menu() {
			return this.h_menu;
		},
	},
	components: {
		'acc-component': Vue.defineAsyncComponent(() => loadModule('./components/AccComponent.vue', options)),
		'icon-all': Vue.defineAsyncComponent(() => loadModule('./components/IconComponent.vue', options)),
	},
	methods: {
		page(p) {
			var sport = this.$store.state.sport;
			var sportList = this.$store.state.sportList;
			sportList.forEach(item => {
				if (sport !== item.sport_s) {
					sport = "ft";
				}
			});
			if (p == '') { this.$router.push("/"); }
			else if (p == 'digimon') { this.$router.push("/digimon"); }
			else if (p == 'sudoku') { this.$router.push("/sudoku"); }
			else if (sport == null) { this.$router.push("/" + p + "/ft"); }
			else if (p == 'result') { this.$router.push("/" + p); }
			else if (p == 'tv') { this.$router.push("/" + p); }
			else if (p == 'doc/todaywagers') { this.$router.push("/" + p); }
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
