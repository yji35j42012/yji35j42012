<style scoped></style>

<template>
	<div class="home_title"><span>滾球中賽事</span></div>
	<sport-btn></sport-btn>
	<div class="home_title"><span>體育</span></div>
	<div class="home_sport">
		<template v-for="item in sport_list" :key="item.sport_title">
			<div class="home_sport_item">
				<div class="home_sport_title">{{ item.sport_title }}</div>
				<div class="home_sport_pic">
					<img :src="'/images/home/' + item.sport_img" alt="">
				</div>
				<div class="home_sport_btn">
					<div class="home_sport_new">
						<span>滾球</span>
						<div class="home_sport_num">
							1
							<i class="icon_homearr" v-html="icon_all.icon_homearr"></i>
						</div>
					</div>
					<div class="home_sport_new">
						<span>今日</span>
						<div class="home_sport_num">
							1
							<i class="icon_homearr" v-html="icon_all.icon_homearr"></i>
						</div>
					</div>
					<div class="home_sport_new">
						<span>早盤</span>
						<div class="home_sport_num">
							1
							<i class="icon_homearr" v-html="icon_all.icon_homearr"></i>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			gameTitle: ['滾球中賽事', '虛擬賽事', '今日賽事', '早盤賽事'],
			gameData: {
				live: { title_id: 0, ft: true, tt: true, },
				vf: { title_id: 1, ft: true, tt: false, },
				today: { title_id: 2, ft: false, tt: true, },
				early: { title_id: 3, ft: false, tt: false, },
			},
			sport_list: [
				{ sport_title: "足球", sport_img: "img_home_ft.jpg" },
				{ sport_title: "籃球 & 美式足球", sport_img: "img_home_bk.jpg" },
				{ sport_title: "電子競技", sport_img: "img_home_es.jpg" },
				{ sport_title: "網球", sport_img: "img_home_tn.jpg" },
				{ sport_title: "排球", sport_img: "img_home_vb.jpg" },
				{ sport_title: "羽毛球", sport_img: "img_home_bm.jpg" },
				{ sport_title: "乒乓球", sport_img: "img_home_tt.jpg" },
				{ sport_title: "棒球", sport_img: "img_home_bs.jpg" },
				{ sport_title: "斯諾克 / 台球", sport_img: "img_home_sk.jpg" },
				{ sport_title: "其他", sport_img: "img_home_op.jpg" },
				{ sport_title: "虛擬賽事", sport_img: "img_home_vf.jpg" },
			],
		}
	},
	components: {
		'sport-btn': Vue.defineAsyncComponent(() => loadModule('./components/SportBtn.vue', options)),
	},
	computed: {
		rGameData() {
			let rObj = {}
			return
		}
	},
	methods: {},
}
</script>
