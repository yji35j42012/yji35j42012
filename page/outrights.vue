<style scoped></style>

<template>
	<div class="sportHead">
		<div class="sportHead_league">
			<div class="sportHead_menu">
				<sport-btn></sport-btn>
			</div>
			<div class="sportHead_title">
				<div class="sportHead_title_txt">
					<div class="league">
						<i class="icon_arr" v-html="icon_all.icon_back"></i>
						<span data-showleague="/聯盟">電子競技</span>
					</div>
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
	},
	computed: {},
	methods: {},
}
</script>
