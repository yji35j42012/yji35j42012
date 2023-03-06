<style scoped></style>

<template>
    <div class="petInfoTxt">
        <p class="petInfoTxt_name">
            157
            <i class="gender male">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path :d="icon_all.male" />
                </svg>
            </i>
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
