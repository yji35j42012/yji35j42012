<style scoped></style>

<template>
    <div class="container">
        <div class="theme_head">
            <div :class="['theme_switch', themeSwitch]">
                <button class="cat_btn" @click="themeSwitchHandler('cat')">
                    喵星人
                </button>
                <button class="dog_btn" @click="themeSwitchHandler('dog')">
                    汪星人
                </button>
            </div>
        </div>
        <div class="theme_group">
            <div class="theme_item">
                <div
                    class="theme_txt"
                    v-for="(item, index) in theme"
                    :key="index"
                >
                    <div class="theme_txt_title">
                        {{ item.title }}
                    </div>
                    <div class="theme_txt_p">
                        {{ item.txt }}
                    </div>
                    <label class="searchBox">
                        <input type="text" :placeholder="item.searchTxt" />
                        <i class="searchBox_icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 24"
                            >
                                <path :d="icon_all.search" />
                            </svg>
                        </i>
                    </label>
                </div>
                <div
                    class="theme_pic"
                    v-for="(item, index) in theme"
                    :key="index"
                >
                    <img src="" alt="" style="width:480px;height:671px;" />
                    <!-- <img :src="item.src" alt="" /> -->
                </div>
            </div>

            <div class="theme_btn">
                <button class="theme_btn_page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path :d="icon_all.arrowLeft" />
                    </svg>
                </button>
                <button class="theme_btn_page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path :d="icon_all.arrowRight" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            theme: [
                {
                    title: "橘貓",
                    src: "../images/theme/orange_cat.png",
                    txt:
                        "個性膽小、貪吃、愛講話，十隻橘貓九隻胖，另一隻...超胖。",
                    searchTxt: "搜尋橘貓",
                },
            ],
            themeSwitch: "cat",
        };
    },
    components: {},
    mounted() {
        // console.log(store.state.nowPage);
    },
    computed: {},
    methods: {
        themeSwitchHandler(str) {
            this.themeSwitch = str;
        },
    },
};
</script>
