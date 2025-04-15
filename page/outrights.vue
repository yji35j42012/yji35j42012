<style scoped></style>

<template>
	<div class="sportHead">
		<div class="sportHead_league">
			<div class="sportHead_menu">
				<sport-btn></sport-btn>
			</div>
			<div class="sportHead_title">
				<div class="sportHead_title_txt">
					<league-title></league-title>
					<div class="name">滾球賽事</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
		}
	},
	components: {
		'sport-btn': Vue.defineAsyncComponent(() => loadModule('./components/SportBtn.vue', options)),
		'league-title': Vue.defineAsyncComponent(() => loadModule('./components/LeagueTitle.vue', options)),
	},
	computed: {},
	methods: {},
}
</script>
