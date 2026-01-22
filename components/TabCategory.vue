<style scoped></style>

<template>
	<router-link class="tab_categoryItem" v-for="item, index in CategoryGroup.lists" :key="item.category_id"
		:to="'/doc/' + item.category_view" @click="itemHandler(index, item)">
		{{ item.category_title }}
	</router-link>

</template>

<script>
module.exports = {
	data() {
		return {
			category_Num: 0
		}
	},
	props: ['CategoryGroup'],
	mounted() { },
	computed: {},
	methods: {
		// categoryHandler(i) {
		// 	this.category_Num = i
		// },
		itemHandler(i, str) {
			this.category_Num = i;
			// this.$router.push("/doc/" + str.category_view)
			// this.category_title = str.select_title;
			// 	this.$emit("return-sel", str);
		}
	},
}
</script>
