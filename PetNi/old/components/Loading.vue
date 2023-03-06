<style scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
}
</style>

<template>
    <div id="loading" class="loading">
        <div id="lottie_content"></div>
    </div>
</template>

<script>



module.exports = {
    data() {
        return {
            icon_all: icon_all,
            loading: loading,
        };
    },
    mounted() {
        // console.log("this.loading[0]", this.loading);

        // const anlottie = lottie.loadAnimation({
        //     container: lottie_content,
        //     animType: "svg",
        //     loop: true,
        //     path: this.loading,
        // });
        // anlottie.setSpeed(6);
    },
    computes: {},
    methods: {},
};
</script>
