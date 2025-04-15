<style scoped></style>

<template>
	<div class="league">
		<i class="icon_arr" v-html="icon_all.icon_back"></i>
		<span data-showleague="/聯盟">{{ r_sport }}</span>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			sport_name: null,
		}
	},
	computed: {
		r_sport() {
			switch (this.$store.state.sport) {
				case "sc": return "足球"; break;
				case "bk": return "籃球 & 美式足球"; break;
				case "es": return "電子競技"; break;
				case "tn": return "網球"; break;
				case "vb": return "排球"; break;
				case "bm": return "羽毛球"; break;
				case "tt": return "乒乓球"; break;
				case "bs": return "棒球"; break;
				case "sk": return "斯諾克 / 台球"; break;
				case "op": return "其他"; break;
				default: break;
			}
		},
	},
	methods: {},
}
</script>
