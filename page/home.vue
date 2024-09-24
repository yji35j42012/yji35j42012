<style scoped></style>

<template>
	<div class="content_l">
		<template v-for="(item, index) in gameData">
			<div class="game_title">
				<span class="game_title_txt">{{ gameTitle[item.title_id] }}</span>
			</div>
			<div class="game_box">
				<div class="game_sport" v-if="item.ft">
					<i class="icon_ft" v-html="icon_all.icon_ft"></i>
					<div class="game_sport_txt">足球</div>
				</div>
				<div class="game_sport" v-if="item.tt">
					<i class="icon_tt" v-html="icon_all.icon_tt"></i>
					<div class="game_sport_txt">乒乓球</div>
				</div>
			</div>
		</template>
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
					title_id: 0,
					ft: true, tt: true,
				},
				vf: {
					title_id: 1,
					ft: true, tt: false,
				},
				today: {
					title_id: 2,
					ft: false, tt: true,
				},
				early: {
					title_id: 3,
					ft: false, tt: false,
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
