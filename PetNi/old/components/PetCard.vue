<style scoped></style>

<template>
    <li class="petCard_item">
        <div class="collect_pic"></div>
        <petinfo></petinfo>
        <button class="close_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7">
                <path :d="icon_all.close" />
            </svg>
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
