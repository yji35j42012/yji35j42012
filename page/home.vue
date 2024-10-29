<style scoped></style>

<template>
	<div class="home_title"><span>滾球中賽事</span></div>
	<div class="home_sport">
		<div class="sport_btn">
			<i class="sport_btn_icon" v-html="icon_all.icon_ft"></i>
			<div class="sport_btn_txt">足球</div>
		</div>
		<div class="sport_btn">
			<i class="sport_btn_icon" v-html="icon_all.icon_bk"></i>
			<div class="sport_btn_txt">籃球 & 美式足球</div>
		</div>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			icon_all: icon_all,
			gameTitle: ['滾球中賽事', '虛擬賽事', '今日賽事', '早盤賽事'],
			gameData: {
				live: {
					title_id: 0, ft: true, tt: true,
				},
				vf: {
					title_id: 1, ft: true, tt: false,
				},
				today: {
					title_id: 2, ft: false, tt: true,
				},
				early: {
					title_id: 3, ft: false, tt: false,
				}
			}
		}
	},
	computed: {
		rGameData() {
			let rObj={}
			return
		}
	},
	methods: {},
}
</script>
