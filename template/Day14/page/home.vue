<style scoped></style>

<template>
	<div class="container">
		<div class="menu">
			<div class="dayinfo">
				<div class="menu_time">1:30</div>
				<div class="menu_temperature msg_right" data-msgr="°F">
					<i v-html="icon_all.sun" class="menu_temperature_sun"></i>
					72
				</div>
			</div>
			<button class="menu_close">
				<i v-html="icon_all.logout"></i>
			</button>
			<div class="menu_note">
				Extra cool people meeting
				<span>10AM</span>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all
		};
	},
	mounted() {},
	computed: {},
	methods: {}
};
</script>
