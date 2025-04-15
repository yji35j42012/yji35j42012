<style scoped></style>

<template>
	<div class="sportBtn_group">
		<div :class="['sportBtn_group_item', r_sport == 'sc' ? 'on' : '']" @click="page('sc')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_ft"></i>
			<div class="sportBtn_group_txt">足球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'bk' ? 'on' : '']" @click="page('bk')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bk"></i>
			<div class="sportBtn_group_txt">籃球 & 美式足球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'es' ? 'on' : '']" @click="page('es')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_es"></i>
			<div class="sportBtn_group_txt">電子競技</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'tn' ? 'on' : '']" @click="page('tn')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_tn"></i>
			<div class="sportBtn_group_txt">網球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'vb' ? 'on' : '']" @click="page('vb')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_vb"></i>
			<div class="sportBtn_group_txt">排球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'bm' ? 'on' : '']" @click="page('bm')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bm"></i>
			<div class="sportBtn_group_txt">羽毛球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'tt' ? 'on' : '']" @click="page('tt')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_tt"></i>
			<div class="sportBtn_group_txt">乒乓球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'bs' ? 'on' : '']" @click="page('bs')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_bs"></i>
			<div class="sportBtn_group_txt">棒球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'sk' ? 'on' : '']" @click="page('sk')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_sk"></i>
			<div class="sportBtn_group_txt">斯諾克 / 台球</div>
		</div>
		<div :class="['sportBtn_group_item', r_sport == 'op' ? 'on' : '']" @click="page('op')">
			<i class="sportBtn_group_icon" v-html="icon_all.icon_op"></i>
			<div class="sportBtn_group_txt">其他</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			sport: null,
		}
	},
	computed: {
		r_sport() {
			return this.$store.state.sport
		},
	},
	methods: {
		page(sport) {
			var sport_type = this.$store.state.sport_type;
			if (sport_type == "home" || sport_type == null || sport_type == '') {
				this.$router.push("/live" + "/" + sport);
			} else {
				this.$router.push("/" + sport_type + "/" + sport);
			}
		}
	},
}
</script>
