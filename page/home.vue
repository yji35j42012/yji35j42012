<style scoped></style>

<template>
	<div class="home_title"><span>滾球中賽事</span></div>
	<sport-btn></sport-btn>
	<div class="home_title"><span>體育</span></div>
	<!-- <div class="home_sport">
		<div class="home_sport_item">

		</div>
	</div> -->
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			gameTitle: ['滾球中賽事', '虛擬賽事', '今日賽事', '早盤賽事'],
			gameData: {
				live: { title_id: 0, ft: true, tt: true, },
				vf: { title_id: 1, ft: true, tt: false, },
				today: { title_id: 2, ft: false, tt: true, },
				early: { title_id: 3, ft: false, tt: false, },
			}
		}
	},
	components: {
		'sport-btn': Vue.defineAsyncComponent(() => loadModule('./components/SportBtn.vue', options)),
	},
	computed: {
		rGameData() {
			let rObj = {}
			return
		}
	},
	methods: {},
}
</script>
