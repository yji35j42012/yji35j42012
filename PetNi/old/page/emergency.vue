<style scoped></style>

<template>
    <div class="container">
        <div class="emergency_head">
            <div class="name showPAD" data-txt="急診">24H</div>
            <ul class="tab">
                <li class="on">北部</li>
                <li>中部</li>
                <li>南部</li>
                <li>東部</li>
            </ul>
            <span>*資訊僅供參考，建議先電話聯絡再前往。</span>
        </div>

        <ul class="emergency_group">
            <li class="emergency_group_title">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23">
                        <path :d="icon_all.address" />
                    </svg>
                </i>
                台北市
            </li>
            <li
                class="emergency_group_card"
                v-for="(item, index) in 7"
                :key="index"
            >
                <div class="detail">
                    <p class="title">展望動物醫院</p>
                    <p>02 2388 0122</p>
                    <p>台北市萬華區中華路2段2號</p>
                </div>
                <div class="state">
                    <span>*疫情期間有開</span>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path :d="icon_all.phone" />
                        </svg>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    components: {},
    mounted() {
        // console.log(store.state.nowPage);
    },
    computed: {},
    methods: {},
};
</script>
