<style scoped></style>

<template>
	<div class="left_menu">
		<div class="mask"></div>
		<div class="left_menu_box">
			<div class="left_menu_title">
				<acc-component></acc-component>
				<i class="icon_close" v-html="icon_all.icon_close"></i>
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
	created() {
	},
	computed: {},
	components: {
		'acc-component': Vue.defineAsyncComponent(() => loadModule('./components/AccComponent.vue', options)),
	},
	methods: {},
}
</script>
