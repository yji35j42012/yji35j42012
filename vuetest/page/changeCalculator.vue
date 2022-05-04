<style scoped></style>

<template>
    <div class="container">
        <p>1 日幣 = 0.269 台幣</p>
        <div>日幣 <input type="text" v-model="jpy" /></div>
        <div>台幣 <input type="text" v-model="twd" /></div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            jpy: 0,
        };
    },
    mounted() {},
    computed: {
        twd: {
            get() {
                //輸入的日幣
                return this.jpy * 0.269;
            },
            set(value) {
                //換算後的台幣
                return (this.jpy = value / 0.269);
            },
        },
    },
    methods: {},
};
</script>
