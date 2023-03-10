<style scoped></style>

<template>
	<div class="container">
		<ul v-if="tab == 'card'" class="petCard">
			<li class="petCard_item _new" @click="addPetCard">
				<div class="petCard_item_add">
					<i v-html="icon_all.add"></i>
				</div>
			</li>
			<petcard v-for="(item, index) in 7" :key="index" :imgnum="index"></petcard>
		</ul>

		<div v-if="tab == 'info'" class="adoption_info">
			<div class="adoption_info_pic">
				<img src alt />
				<button class="change">替換照片</button>
			</div>
			<div class="adoption_info_group">
				<div class="adoption_info_item d_flex">
					<div class="adoption_info_item_box">
						<h2>
							種類
							<span class="required_txt">(*必選)</span>
						</h2>
						<ul class="ul">
							<li class="square on">
								<i class="animal" v-html="icon_all.cat"></i>
							</li>
							<li class="square">
								<i class="animal" v-html="icon_all.dog"></i>
							</li>
						</ul>
					</div>
					<div class="adoption_info_item_box">
						<h2>
							性別
							<span class="required_txt">(*必選)</span>
						</h2>
						<ul class="ul">
							<li class="square male on">
								<i class="gender" v-html="icon_all.male"></i>
							</li>
							<li class="square female">
								<i class="gender" v-html="icon_all.female"></i>
							</li>
							<li class="square">不明</li>
						</ul>
					</div>
				</div>
				<div class="adoption_info_item">
					<h2>年齡</h2>
					<ul class="ul">
						<li class="on">幼齡</li>
						<li>成年</li>
					</ul>
				</div>
				<div class="adoption_info_item">
					<h2>牠的名字</h2>
					<input type="text" placeholder="若尚未取名可不填" />
				</div>
				<div class="adoption_info_item">
					<h2>
						毛色
						<span class="required_txt">(*必選)</span>
					</h2>
					<ul class="ul">
						<li>黑犬</li>
					</ul>
				</div>
			</div>
			<div class="adoption_info_group">
				<div class="adoption_info_item">
					<h2>
						聯絡方式
						<span class="required_txt">(*必選)</span>
					</h2>
					<input type="text" placeholder="聯絡方式 (電話、通訊等…)" />
					<div class="d_flex">
						<label class="sel">
							<span>選擇縣市</span>
							<ul>
								<li>台北市</li>
								<li>台中市</li>
								<li>台北市</li>
								<li>台中市</li>
							</ul>
						</label>
						<label class="sel">
							<span>選擇區別</span>
							<ul>
								<li>士林區</li>
							</ul>
						</label>
					</div>
				</div>
				<div class="adoption_info_item">
					<h2>狀況</h2>
					<textarea type="text" class="normal_textarea" maxlength="40" placeholder="限40字"></textarea>
				</div>
				<div class="adoption_info_item">
					<button class="adoption_info_send">發佈</button>
					<div class="adoption_info_notie" style="display:none">*必填項目尚未填寫完，請填寫完整後再發佈。</div>
				</div>
			</div>
		</div>
		<login v-if="loginShow" @closelogin="closeLoginHandler"></login>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			tab: "card",
			loginShow: false
		};
	},
	components: {
		petcard: httpVueLoader("../components/PetCard.vue"),
		login: httpVueLoader("../components/Login.vue")
	},
	mounted() {
		// console.log(store.state.nowPage);
	},
	computed: {},
	methods: {
		addPetCard() {
			this.loginShow = true;
		},
		closeLoginHandler() {
			this.loginShow = false;
		}
	}
};
</script>
