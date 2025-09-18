<style scoped></style>

<template>
	<no-data></no-data>
</template>

<script>
module.exports = {
	data() {
		return {}
	},
	components: {
		'no-data': Vue.defineAsyncComponent(() => loadModule('./components/NoData.vue', options)),
	},
	computed: {},
	methods: {},
}
</script>
