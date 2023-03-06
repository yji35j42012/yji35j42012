<style scoped></style>

<template>
    <div class="container">
        <div
            id="theme_group"
            class="theme_group"
            @mousedown="slipMouseDown"
            @touchstart="slipMouseDown"
        >
            <div
                class="theme_item"
                v-for="(item, index) in showThemes"
                :key="index"
            >
                <div class="theme_txt">
                    <div class="theme_txt_title">{{ item.title }}</div>
                    <div class="theme_txt_p">{{ item.txt }}</div>
                    <label class="searchBox">
                        <input type="text" :placeholder="item.searchTxt" />
                        <i class="searchBox_icon" v-html="icon_all.search"></i>
                    </label>
                </div>
                <div class="theme_pic">
                    <!-- <img src="./images/theme/cat1.png" alt="" /> -->
                    <img :src="item.src" alt="" style="opacity:1;" />
                </div>
            </div>
        </div>
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

        <div class="theme_btn">
            <button class="theme_btn_page" @click="themePageHandler(-1)">
                <i v-html="icon_all.arrowLeft"></i>
            </button>
            <button class="theme_btn_page" @click="themePageHandler(1)">
                <i v-html="icon_all.arrowRight"></i>
            </button>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            themes: {
                cat: [
                    {
                        title: "橘貓",
                        src: "./images/theme/cat1.png",
                        txt:
                            "個性膽小、貪吃、愛講話，十隻橘貓九隻胖，另一隻...超胖。",
                        searchTxt: "搜尋橘貓",
                    },
                    {
                        title: "三花貓",
                        src: "./images/theme/cat2.jpg",
                        txt:
                            "個性黏人、愛撒嬌，因為遺傳基因的關係，99%以上都是母貓。",
                        searchTxt: "搜尋三花貓",
                    },
                    {
                        title: "白貓",
                        src: "./images/theme/cat3.jpg",
                        txt:
                            "優雅乖巧、個性獨立。撒嬌時，會輕聲喵喵叫，或是輕拍主人討摸摸。",
                        searchTxt: "搜尋白貓",
                    },
                    {
                        title: "黑貓",
                        src: "./images/theme/cat4.jpg",
                        txt:
                            "反差萌、愛撒嬌、聰明、貼心、學習力強、會認人，對牠好，牠會記在心裡。",
                        searchTxt: "搜尋黑貓",
                    },
                    {
                        title: "乳牛貓",
                        src: "./images/theme/cat5.jpg",
                        txt: "貓界的哈士奇、個性好動，容易跟其他貓打成一片。",
                        searchTxt: "搜尋乳牛貓",
                    },
                    {
                        title: "虎斑貓",
                        src: "./images/theme/cat6.jpg",
                        txt:
                            "野性美、狩獵高手、傲嬌脾氣、警戒心強，一旦被牠認定，就會很依賴主子。",
                        searchTxt: "搜尋虎斑貓",
                    },
                    {
                        title: "玳瑁貓",
                        src: "./images/theme/cat7.jpg",
                        txt:
                            "個性善良、脾氣最好、愛撒嬌、不挑食，99%以上都是母貓，親人也親貓。",
                        searchTxt: "搜尋玳瑁貓",
                    },
                ],
                dog: [
                    {
                        title: "三色犬",
                        src: "./images/theme/dog1.jpg",
                        txt: "個性老實、喜歡社交，溫順黏人的小跟屁蟲。",
                        searchTxt: "搜尋三色犬",
                    },
                    {
                        title: "紅棕犬",
                        src: "./images/theme/dog2.jpg",
                        txt: "個性獨立、外向、喜歡與人互動。",
                        searchTxt: "搜尋紅棕犬",
                    },
                    {
                        title: "黃犬",
                        src: "./images/theme/dog3.jpg",
                        txt: "溫和友善、忠誠護主、乖巧聽話、不太主動攻擊人。",
                        searchTxt: "搜尋黃犬",
                    },
                    {
                        title: "白犬",
                        src: "./images/theme/dog4.jpg",
                        txt: "憂雅氣質、乖巧安靜。白毛容易髒，需要花心思照顧。",
                        searchTxt: "搜尋白犬",
                    },
                    {
                        title: "黑犬",
                        src: "./images/theme/dog5.jpg",
                        txt: "個性穩重、敏捷聰明、學習力強。",
                        searchTxt: "搜尋黑犬",
                    },
                    {
                        title: "雙色犬",
                        src: "./images/theme/dog6.jpg",
                        txt:
                            "活潑好動、憨厚、愛玩、天生少根筋、無厘頭，親人也親狗。",
                        searchTxt: "搜尋雙色犬",
                    },
                    {
                        title: "虎斑犬",
                        src: "./images/theme/dog7.jpg",
                        txt: "身上有著老虎斑點，面惡心善、忠心勇敢、聰明機警。",
                        searchTxt: "搜尋虎斑犬",
                    },
                    {
                        title: "灰犬",
                        src: "./images/theme/dog8.jpg",
                        txt:
                            "善良優雅、好奇心重、喜歡嘗試新鮮事物、樂於取悅主人。",
                        searchTxt: "搜尋灰犬",
                    },
                ],
            },
            themeSwitch: "cat",
            themePage: 0,
        };
    },
    components: {},
    mounted() {
        // console.log(store.state.nowPage);
        var showBtn = document.querySelector(".theme_btn");
        window.innerWidth <= 995
            ? (showBtn.style.display = "none")
            : (showBtn.style.display = "block");
        window.onresize = () => {
            return (() => {
                if (window.innerWidth <= 995) {
                    showBtn.style.display = "none";
                    theme_group.style = "";
                } else {
                    showBtn.style.display = "block";
                }
            })();
        };
    },
    computed: {
        showThemes() {
            let themeObj = [];
            themeObj = this.themes[this.themeSwitch];
            return themeObj;
        },
    },
    methods: {
        themeSwitchHandler(str) {
            this.themeSwitch = str;
            this.themePage = 0;
        },
        themePageHandler(num) {
            if (this.themePage + num < 0) {
                this.themePage = 0;
            } else if (
                this.themePage + num >
                this.themes[this.themeSwitch].length - 1
            ) {
                this.themePage = this.themes[this.themeSwitch].length;
            } else {
                var theme_group = document.querySelector("#theme_group");
                this.themePage = this.themePage + num;
                var move = this.themePage * 100;
                theme_group.style = `transform:translateX(-${move}%)`;
            }
            // let scrollitem = document.getElementById(this.who);
            // scrollitem.style = `transform: translate3d(${x}px ,${y}px , 0) rotate(${rotate}deg); transition-duration: ${time}s;`;
        },
        slipMouseDown($event) {
            console.log("按下");
        },
    },
};
</script>
