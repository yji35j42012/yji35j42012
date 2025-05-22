<style scoped></style>

<template>
	<sport-title msg="賽果"></sport-title>
	<div class="selectBox">
		<div class="selectBox_date">
			<i class="icon_arr" v-html="icon_all.icon_arr"></i>
			<span class="selectBox_title">2025-02-11</span>
		</div>
		<select-component :SelectGroup="select_group"></select-component>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			select_group: {
				title: null,
				lists: [
					{ select_id: 0, select_title: "足球", },
					{ select_id: 1, select_title: "籃球 & 美式足球", },
				],
			}
		}
	},
	computed: {},
	components: {
		'sport-title': Vue.defineAsyncComponent(() => loadModule('./components/SportTitle.vue', options)),
		'select-component': Vue.defineAsyncComponent(() => loadModule('./components/SelectComponent.vue', options)),

	},
	methods: {},
}
</script>
