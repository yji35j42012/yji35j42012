<style scoped></style>

<template>
	<div class="sportBtn_group">
		<router-link class="sportBtn_group_item" to="/live/sc">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_ft"></i>
			<div class="sportBtn_group_txt">足球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/bk">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bk"></i>
			<div class="sportBtn_group_txt">籃球 & 美式足球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/es">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_es"></i>
			<div class="sportBtn_group_txt">電子競技</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/tn">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_tn"></i>
			<div class="sportBtn_group_txt">網球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/vb">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_vb"></i>
			<div class="sportBtn_group_txt">排球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/bm">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bm"></i>
			<div class="sportBtn_group_txt">羽毛球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/tt">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_tt"></i>
			<div class="sportBtn_group_txt">乒乓球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/bs">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bs"></i>
			<div class="sportBtn_group_txt">棒球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/sk">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_sk"></i>
			<div class="sportBtn_group_txt">斯諾克 / 台球</div>
		</router-link>
		<router-link class="sportBtn_group_item" to="/live/op">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_op"></i>
			<div class="sportBtn_group_txt">其他</div>
		</router-link>
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
