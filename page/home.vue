<style scoped></style>

<template>
	<div class="home_title"><span>滾球中賽事</span></div>
	<sport-btn></sport-btn>
	<div class="home_title"><span>體育</span></div>
	<div class="home_sport">
		<template v-for="index in 20" :key="index">
			<div class="home_sport_item">
				<div class="home_sport_title">足球</div>
				<div class="home_sport_pic">
					<img src="/images/home/img_home_ft.jpg" alt="">
				</div>
				<div class="home_sport_btn">
					<div class="home_sport_new">
						<span>滾球</span>
						<div class="home_sport_num">
							1
							<i class="icon_homearr" v-html="icon_all.icon_homearr"></i>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
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
