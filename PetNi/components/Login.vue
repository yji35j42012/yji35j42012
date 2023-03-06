<style scoped></style>

<template>
    <div class="login">
        <div class="login_box">
            <div class="login_txt">請登入帳號，才能發送養文</div>
            <div class="login_btnBox">
                <button class="ok">
                    <i v-html="icon_all.google"></i>
                    google登入
                </button>
                <button class="cancel" @click="close">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    computes: {},
    methods: {
        close() {
            this.$emit("closelogin");
        },
    },
};
</script>
