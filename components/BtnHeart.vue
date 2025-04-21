<style scoped></style>

<template>
	<i :class="['icon_heart', isHeart ? 'on' : '']" v-html="icon_all.icon_heart" @click="heartHandler"></i>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			isHeart: false,
		}
	},
	computed: {},
	methods: {
		heartHandler() {
			this.isHeart = !this.isHeart
		}
	},
}
</script>
