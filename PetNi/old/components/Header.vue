<style scoped></style>

<template>
    <div class="header">
        <div class="container">
            <h1 class="logo" @click="change('home')">
                <router-link to="/">
                    <img src="./images/logo.png" alt="" />
                    <!-- <img src="./images/logo-mobile.png" alt="" /> -->
                </router-link>
            </h1>

            <!-- <button
                :class="['menu_btn', menuShow ? 'open' : false]"
                @click="btnHandler"
            >
                <span></span>
            </button> -->
            <ul class="menu_group">
                <li
                    @click="change('home')"
                    :class="nowPage == 'home' ? 'on' : ''"
                >
                    <router-link to="/">
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 21"
                            >
                                <path :d="icon_all.pair" />
                            </svg>
                        </i>
                        <span>配對</span>
                    </router-link>
                </li>
                <li
                    @click="change('collect')"
                    :class="nowPage == 'collect' ? 'on' : ''"
                >
                    <router-link to="/collect">
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 25"
                            >
                                <path :d="icon_all.favorites" />
                            </svg>
                        </i>
                        <span>收藏</span>
                    </router-link>
                </li>
                <li
                    @click="change('theme')"
                    :class="nowPage == 'theme' ? 'on' : ''"
                >
                    <router-link to="/theme">
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 25"
                            >
                                <path :d="icon_all.theme" />
                            </svg>
                        </i>
                        <span>主題館</span>
                    </router-link>
                </li>
                <li
                    @click="change('adoption')"
                    :class="nowPage == 'adoption' ? 'on' : ''"
                >
                    <router-link to="/adoption">
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 25"
                            >
                                <path :d="icon_all.collar" />
                            </svg>
                        </i>
                        <span>送養</span>
                    </router-link>
                </li>
                <li
                    @click="change('emergency')"
                    :class="nowPage == 'emergency' ? 'on' : ''"
                >
                    <router-link to="/emergency">
                        <i>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 25"
                            >
                                <path :d="icon_all.hospital" />
                            </svg>
                        </i>
                        <span>急診</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
            nowPage: "",
        };
    },
    mounted() {
        this.nowPage = store.state.nowPage;
    },
    computes: {},
    methods: {
        change(str) {
            this.nowPage = str;
        },
    },
};
</script>
