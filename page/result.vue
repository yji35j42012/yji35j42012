<style scoped></style>

<template>
	<div class="sportTitle">
		<i class="icon_back" v-html="icon_all.icon_back"></i>
		<span>賽果</span>
		<i class="icon_reload" v-html="icon_all.icon_reload"></i>
	</div>
	<div class="selectBox">
		<div class="selectBox_date">
			<i class="icon_arr" v-html="icon_all.icon_arr"></i>
			<span class="selectBox_title">2025-02-11</span>
		</div>
		<div class="selectBox_tool">
			<i class="icon_arr" v-html="icon_all.icon_arr"></i>
			<span class="selectBox_title">足球</span>
			<ul class="selectBox_group">
				<li class="selectBox_group_list on">足球</li>
				<li class="selectBox_group_list">籃球 & 美式足球</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports={
	data() {
		return {
			icon_all: icon_all,
		}
	},
	computed: {},
	methods: {},
}
</script>
