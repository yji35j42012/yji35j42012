<style scoped></style>

<template>
    <div class="petInfoTxt">
        <p class="petInfoTxt_name">
            157
            <i class="gender male" v-html="icon_all.male"> </i>
        </p>
        <p class="petInfoTxt_address">臺南市南區</p>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    mounted() {},
    computes: {},
    methods: {},
};
</script>
