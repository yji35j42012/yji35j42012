<style scoped></style>

<template>
	<div class="normal_select">
		<div class="normal_select_title" v-if="this.$props.SelectGroup.title !== null">
			{{ this.$props.SelectGroup.title }}
		</div>
		<label class="normal_select_box">
			<i class="icon_arr" v-html="icon_all.icon_arr"></i>
			<div class="normal_select_txt" @click="selHandler">{{ select_txt }}</div>
			<ul :class="['normal_select_ul', isShow ? 'on' : '']">
				<li class="normal_select_li" v-for="item in SelectGroup.lists" :key="item.select_id"
					@click="itemHandler(item)">
					{{ item.select_title }}
				</li>
			</ul>
		</label>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			isShow: false,
			select_txt: "",
		}
	},
	props: ['SelectGroup'],
	mounted() {
		var path = this.$route.path.split("/");
		let select_lists = this.$props.SelectGroup.lists;
		select_lists.forEach((item, index) => {
			if (item.select_view == path[path.length - 1]) {
				this.select_txt = this.$props.SelectGroup.lists[index].select_title;
				return;
			} else {
				this.select_txt = this.$props.SelectGroup.lists[0].select_title;
			}
		});
	},
	computed: {},
	methods: {
		selHandler(event) {
			event.stopPropagation();
			document.addEventListener('click', this.handleClickOutside);
			this.isShow = true;
		},
		handleClickOutside(event) {
			if (this.isShow) {
				this.isShow = false;
				document.removeEventListener('click', this.handleClickOutside);
			}
		},
		itemHandler(str) {
			this.select_txt = str.select_title;
			this.$emit("return-sel", str);
		}
	},
}
</script>
