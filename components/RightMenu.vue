<style scoped></style>

<template>
	<div :class="['left_menu', isShowMenu ? 'on' : '']">
		<div class="mask"></div>
		<div class="left_menu_box">
			<div class="left_menu_title">
				<acc-component></acc-component>
				<i class="icon_close" v-html="icon_all.icon_close" @click="closeLeftMenu"></i>
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
		closeLeftMenu() {
			this.$store.dispatch('SET_MENU', false);
		}
	},
}
</script>
