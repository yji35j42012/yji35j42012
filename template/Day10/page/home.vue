<style scoped></style>

<template>
    <div class="container">
        <div class="banner">
            <div class="banner_item">
                <img src="./images/bammer1.png" alt="" />
            </div>

            <search></search>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {}
    },
    components: {
        search: httpVueLoader('../components/Search.vue'),
    },
    mounted() {},
    computed: {},
    methods: {},
}
</script>
