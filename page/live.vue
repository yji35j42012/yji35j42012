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
					<game-title></game-title>
				</div>
			</div>
		</div>
		<league-tab></league-tab>
	</div>
	<div class="sportBody">
		<div class="sportBody_content">
			<div class="sportBody_title">球會友誼賽</div>
			<div class="sportBody_game">
				<div class="sportBody_game_info">
					<div class="sportBody_game_l">
						<icon-heart></icon-heart>
						<div class="detail">
							<span>上半場<b></b>00:04</span>
						</div>
						<div class="state"></div>
					</div>
					<div class="sportBody_game_r"></div>
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
		'league-tab': Vue.defineAsyncComponent(() => loadModule('./components/Tab.vue', options)),
		'game-title': Vue.defineAsyncComponent(() => loadModule('./components/GameTitle.vue', options)),
		'icon-heart': Vue.defineAsyncComponent(() => loadModule('./components/BtnHeart.vue', options)),
	},
	computed: {},
	methods: {},
}
</script>
