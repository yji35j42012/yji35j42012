<style scoped></style>

<template>
	<div class="name">{{ r_gameTitle }}</div>
</template>

<script>
module.exports = {
	data() {
		return {}
	},
	computed: {
		r_gameTitle() {
			switch (this.$store.state.sport_type) {
				case "live": return "滾球賽事"; break;
				case "hot": return "熱門賽事"; break;
				default: break;
			}

		}
	},
	methods: {},
}
</script>
