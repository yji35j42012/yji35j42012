<style scoped></style>

<template>
	<div class="rule">
		<sport-title msg="體育玩法規則"></sport-title>
		<select-component :SelectGroup="select_group" @return-sel="returnSel"></select-component>
		<div class="rule_content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			select_group: {
				title: "選擇體育項目",
				lists: [
					{ select_id: 0, select_title: "一般體育說明", select_view: "general" },
					{ select_id: 1, select_title: "冠軍", select_view: "outright" },
					{ select_id: 2, select_title: "足球", select_view: "ft" },
				]
			}
		}
	},
	components: {
		'sport-title': Vue.defineAsyncComponent(() => loadModule('./components/SportTitle.vue', options)),
		'select-component': Vue.defineAsyncComponent(() => loadModule('./components/SelectComponent.vue', options)),
	},
	computed: {},
	methods: {
		returnSel(r) {
			this.$router.push("/rule/" + r.select_view);
		}
	},
}
</script>
