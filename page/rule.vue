<style scoped></style>

<template>
	<div class="rule">
		<sport-title msg="體育玩法規則"></sport-title>
		<select-component :SelectGroup="select_group"></select-component>
		<div class="rule_content"></div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			select_group: [
				{ select_id: 0, select_title: "一般體育說明", },
				{ select_id: 1, select_title: "冠軍", },
			]
		}
	},
	components: {
		'sport-title': Vue.defineAsyncComponent(() => loadModule('./components/SportTitle.vue', options)),
		'select-component': Vue.defineAsyncComponent(() => loadModule('./components/SelectComponent.vue', options)),
	},
	computed: {},
	methods: {},
}
</script>
