<style scoped></style>

<template>
	<sport-title msg="帳戶歷史"></sport-title>
</template>

<script>
module.exports = {
	data() {
		return {}
	},
	computed: {},
	components: {
		'sport-title': Vue.defineAsyncComponent(() => loadModule('./components/SportTitle.vue', options)),
	},
	methods: {},
}
</script>
