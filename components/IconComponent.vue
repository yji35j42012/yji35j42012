<style scoped></style>

<template>
	<i v-if="icon_name=='icon_home'" class="icon_home"><svg viewBox="0 0 22 20" id="icon_home" class="icon_home"><path d="M18 19.6484H4C3.73478 19.6484 3.48043 19.543 3.29289 19.3555C3.10536 19.1679 3 18.9136 3 18.6484V9.64836H0L10.327 0.260357C10.5111 0.0928353 10.7511 0 11 0C11.2489 0 11.4889 0.0928353 11.673 0.260357L22 9.64836H19V18.6484C19 18.9136 18.8946 19.1679 18.7071 19.3555C18.5196 19.543 18.2652 19.6484 18 19.6484ZM5 17.6484H17V7.80536L11 2.35136L5 7.80536V17.6484ZM7 13.6484H15V15.6484H7V13.6484Z"/></svg></i>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
		}
	},
	props: ["icon_name"],
	mounted() {
		// console.log('iconcomponent', this.icon_all);
	},
	components: {
	},
	computed: {},
	methods: {},
}
</script>
