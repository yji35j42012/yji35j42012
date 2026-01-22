<style scoped></style>

<template>
	<div class="tab_category">
		<tab-category-item :CategoryGroup="category_group"></tab-category-item>
	</div>
	<router-view></router-view>
</template>

<script>
module.exports = {
	data() {
		return {
			category_group: {
				title: "",
				lists: [
					{ category_id: 0, category_title: "交易狀況", category_view: "todaywagers" },
					{ category_id: 1, category_title: "帳戶歷史", category_view: "history" },
				]
			}
		}
	},
	components: {
		'tab-category-item': Vue.defineAsyncComponent(() => loadModule('./components/TabCategory.vue', options)),
	},
	computed: {},
	methods: {},
}
</script>
