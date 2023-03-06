<style scoped></style>

<template>
    <li class="petCard_item">
        <div class="collect_pic">
            <img :src="'./images/cardimg/cardimg' + imgnum + '.jpg'" alt="" />
        </div>
        <petinfo></petinfo>
        <button class="close_btn">
            <i v-html="icon_all.unlike"></i>
        </button>
    </li>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    props: ["imgnum"],
    components: {
        petinfo: httpVueLoader("../components/PetInfo.vue"),
    },
    mounted() {
        // console.log(store.state.nowPage);
    },
    computed: {},
    methods: {},
};
</script>
