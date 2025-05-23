<style scoped></style>

<template>
	<div class="content_r">
		<div class="marquee" style="display: none;">
			<i class="icon_msg" v-html="icon_all.icon_msg"></i>
			<!-- <marquee scrollamount="5" direction="left" class="marquee_box">
				<span>hahaha</span>
			</marquee> -->
		</div>

		<div class="ad">
			<div class="ad_box"></div>
		</div>
		<div class="ad">
			<div class="ad_box"></div>
		</div>
		<div class="ad">
			<div class="ad_box"></div>
		</div>
		<div class="ad">
			<div class="ad_box"></div>
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
	computed: {},
	methods: {},
}
</script>
