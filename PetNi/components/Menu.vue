<style scoped></style>

<template>
    <div class="menu">
        <div class="container">
            <h1 class="logo" @click="change('home')">
                <router-link to="/">
                    <img src="./images/logo.png" alt="" />
                    <!-- <img src="./images/logo-mobile.png" alt="" /> -->
                </router-link>
            </h1>
            <ul class="menu_group">
                <li
                    @click="change('home')"
                    :class="['menu_item', nowPage == 'home' ? 'on' : '']"
                >
                    <router-link to="/">
                        <i v-html="icon_all.pair"></i>
                        <span>配對</span>
                    </router-link>
                </li>
                <li
                    @click="change('collect')"
                    :class="['menu_item', nowPage == 'collect' ? 'on' : '']"
                >
                    <router-link to="/collect">
                        <i v-html="icon_all.favorites"></i>
                        <span>收藏</span>
                    </router-link>
                </li>
                <li
                    @click="change('theme')"
                    :class="['menu_item', nowPage == 'theme' ? 'on' : '']"
                >
                    <router-link to="/theme">
                        <i v-html="icon_all.theme"></i>
                        <span>主題館</span>
                    </router-link>
                </li>
                <li
                    @click="change('adoption')"
                    :class="['menu_item', nowPage == 'adoption' ? 'on' : '']"
                >
                    <router-link to="/adoption">
                        <i v-html="icon_all.collar"></i>
                        <span>送養</span>
                    </router-link>
                </li>
                <li
                    @click="change('emergency')"
                    :class="['menu_item', nowPage == 'emergency' ? 'on' : '']"
                >
                    <router-link to="/emergency">
                        <i v-html="icon_all.hospital"></i>
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
