<style scoped></style>

<template>
	<div class="sportBtn_group">
		<div v-for="item in sport_list" :class="['sportBtn_group_item', r_sport == item.sport_s ? 'on' : '']"
			@click="page(item.sport_s)">
			<i v-if="item.sport_s == 'ft'" class="sportBtn_group_icon" v-html="icon_all.icon_ft"></i>
			<i v-if="item.sport_s == 'bk'" class="sportBtn_group_icon" v-html="icon_all.icon_bk"></i>
			<i v-if="item.sport_s == 'es'" class="sportBtn_group_icon" v-html="icon_all.icon_es"></i>
			<i v-if="item.sport_s == 'tn'" class="sportBtn_group_icon" v-html="icon_all.icon_tn"></i>
			<i v-if="item.sport_s == 'vb'" class="sportBtn_group_icon" v-html="icon_all.icon_vb"></i>
			<i v-if="item.sport_s == 'bm'" class="sportBtn_group_icon" v-html="icon_all.icon_bm"></i>
			<i v-if="item.sport_s == 'tt'" class="sportBtn_group_icon" v-html="icon_all.icon_tt"></i>
			<i v-if="item.sport_s == 'bs'" class="sportBtn_group_icon" v-html="icon_all.icon_bs"></i>
			<i v-if="item.sport_s == 'sk'" class="sportBtn_group_icon" v-html="icon_all.icon_sk"></i>
			<i v-if="item.sport_s == 'op'" class="sportBtn_group_icon" v-html="icon_all.icon_op"></i>
			<div class="sportBtn_group_txt">{{ item.sport_n }}</div>
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
			return this.$store.state.sport;
		},
		sport_list() {
			var sl = [];
			this.$store.state.sportList.forEach((item, index) => {
				if (item.isShow) {
					item["sport_id"] = index;
					sl.push(item);
				}
			});
			return sl;
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
