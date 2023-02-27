<style scoped></style>

<template>
    <div class="container">
        <div class="login_info">
            <span class="login_info_time">{{time.hour}}:{{time.min}}</span>
            <span class="login_info_temperature msg_right" data-msgr="°F">82</span>
        </div>
        <button class="login_btn">
            <i class="icon _login" v-html="icon_all.login"></i>
        </button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            time: {
                hour: 0,
                min: 0
            }
        };
    },
    mounted() {
        var date = new Date();
        this.time.hour =
            date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.time.min =
            date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes();
        // var timer = setInterval(() => {
        //     this.time.hour = date.getHours();
        //     this.time.min = date.getMinutes();
        // }, 1000 * 60);
    },
    computed: {},
    methods: {}
};
</script>
