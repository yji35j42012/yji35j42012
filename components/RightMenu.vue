<style scoped></style>

<template>
	<div :class="['right_menu', isShowMenu ? 'on' : '']">
		<div class="mask" @click="closeRightMenu"></div>
		<div class="right_menu_box">
			<div class="right_menu_title">
				<acc-component></acc-component>
				<i class="icon_close" v-html="icon_all.icon_close" @click="closeRightMenu"></i>
			</div>
			<div class="right_menu_content">
				<div class="right_menu_txt">設定</div>
				<div class="right_menu_item"></div>
				<div class="right_menu_txt">支援</div>
				<div class="right_menu_item" @click="page('rule')">
					<i class="right_menu_icon" v-html="icon_all.icon_rule"></i>
					<span>體育玩法規則</span>
				</div>
				<div class="right_menu_item"></div>
				<div class="right_menu_item"></div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			// isShowMenu: false
		}
	},
	created() {
	},
	mounted() {
		// this.isShowMenu = this.$store.state.isShowMenu;
	},
	computed: {
		isShowMenu() {
			return this.$store.state.isShowMenu;
		}
	},
	components: {
		'acc-component': Vue.defineAsyncComponent(() => loadModule('./components/AccComponent.vue', options)),
	},
	methods: {
		closeRightMenu() {
			this.$store.dispatch('SET_MENU', false);
		},
		page(p) {
			this.$store.dispatch('SET_MENU', false);
			this.$router.push("/" + p);
		}
	},
}
</script>
