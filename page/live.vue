<style scoped></style>

<template>
	<div class="sportHead">
		<div class="sportHead_league">
			<div class="sportHead_menu">
				<div class="sportBtn_group">
					<router-link class="sportBtn_group_item" to="/live/sc">
						<i class="sportBtn_group_icon" v-html="icon_all.icon_ft"></i>
						<div class="sportBtn_group_txt">足球</div>
					</router-link>
					<router-link class="sportBtn_group_item" to="/live/bk">
						<i class="sportBtn_group_icon" v-html="icon_all.icon_bk"></i>
						<div class="sportBtn_group_txt">籃球 & 美式足球</div>
					</router-link>
				</div>
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
	computed: {},
	methods: {},
}
</script>
