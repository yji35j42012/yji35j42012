<style scoped></style>

<template>
    <div class="func">
        <div class="func_box">
            <h2>我想尋找</h2>
            <ul class="func_ul">
                <li class="square on">
                    <i class="animal" v-html="icon_all.cat"></i>
                </li>
                <li class="square">
                    <i class="animal">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 36 36"
                        >
                            <path :d="icon_all.dog" />
                        </svg>
                    </i>
                </li>
                <li class="square">不拘</li>
            </ul>
        </div>
        <div class="func_box">
            <h2>性別</h2>
            <ul class="func_ul">
                <li class="square male">
                    <i class="gender">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path :d="icon_all.male" />
                        </svg>
                    </i>
                </li>
                <li class="square female">
                    <i class="gender">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path :d="icon_all.female" />
                        </svg>
                    </i>
                </li>
                <li class="square on">不拘</li>
            </ul>
        </div>
        <div class="func_box">
            <h2>年齡</h2>
            <ul class="func_ul">
                <li>幼齡</li>
                <li>成年</li>
                <li class="on">不拘</li>
            </ul>
        </div>
        <div class="func_box">
            <h2>顏色</h2>
            <ul class="func_ul">
                <li>白貓</li>
                <li>黑貓</li>
                <li>乳牛貓</li>
                <li>橘貓</li>
                <li>虎斑貓</li>
                <li>三色貓</li>
                <li>玳瑁貓</li>
                <li class="on">不拘</li>
            </ul>
        </div>
        <div class="func_switch">
            <h2>搜尋附近</h2>
            <label class="switch">
                <input type="checkbox" />
                <span class="switch_ball"></span>
            </label>
        </div>
        <div class="func_switch">
            <h2>互動音效</h2>
            <label class="switch">
                <input type="checkbox" />
                <span class="switch_ball"></span>
            </label>
        </div>
        <button class="btn">套用</button>
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
    methods: {},
};
</script>
