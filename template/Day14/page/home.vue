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
			<button class="normal_btn menu_close">
				<i v-html="icon_all.logout"></i>
			</button>
			<div class="menu_note">
				<i v-html="icon_all.bell"></i>
				Extra cool people meeting
				<span>10AM</span>
			</div>
			<ul class="menu_nav">
				<li class="normal_btn menu_nav_li">Weather</li>
				<li class="normal_btn menu_nav_li">Food</li>
				<li class="normal_btn menu_nav_li">Apps</li>
				<li class="normal_btn menu_nav_li">Movies</li>
			</ul>
			<ul class="menu_link">
				<li class="normal_btn menu_link_li">
					<i class="icon _youtube" v-html="icon_all.youtube"></i>
					Hyperplexed
				</li>
			</ul>
		</div>
		<div class="week">
			<div class="week_title">
				<i v-html="icon_all.sun"></i>
				How's it look out there?
			</div>
			<ul class="week_group">
				<li class="week_group_item">
					<div class="temperature msg_right" data-msgr="°F">72</div>
					<i v-html="icon_all.sun"></i>
					<div class="day"></div>
				</li>
			</ul>
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
