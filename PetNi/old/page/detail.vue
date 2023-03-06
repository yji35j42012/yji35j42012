<style scoped></style>

<template>
    <div class="container">
        <div class="info">
            <div class="slip">
                <div class="slip_item">
                    <div class="slip_item_box">
                        <!-- <button class="unlike_btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 25"
                            >
                                <path :d="icon_all.unlike" />
                            </svg>
                        </button> -->
                        <div class="slip_item_info">
                            <p class="name female">
                                <span>157763</span>
                                <i class="gender">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path :d="icon_all.female" />
                                    </svg>
                                </i>
                            </p>
                            <p class="address">臺南市南區</p>
                        </div>
                        <button class="like_btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <path :d="icon_all.like" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="basic">
            <div class="basic_info">
                <span>
                    <p class="name female">157763</p>
                    <p class="address">臺南市南區</p>
                </span>

                <button class="like_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path :d="icon_all.like" />
                    </svg>
                </button>
            </div>
            <ul class="basic_serial">
                <li class="big">
                    <span>W09C0429-03</span>
                    <span>130</span>
                </li>
                <li class="small">
                    <span>2020.08.28</span>
                    <span>followers</span>
                </li>
            </ul>
            <ul class="basic_introduction">
                <li>
                    <div class="basic_introduction_pic">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25 25"
                        >
                            <path :d="icon_all.status" />
                        </svg>
                    </div>
                    <div class="basic_introduction_txt">求包養</div>
                </li>
                <li>
                    <div class="basic_introduction_pic">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path :d="icon_all.female" />
                        </svg>
                    </div>
                    <div class="">女生</div>
                </li>
                <li>
                    <div class="basic_introduction_pic">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 25"
                        >
                            <path :d="icon_all.theme" />
                        </svg>
                    </div>
                    <div class="basic_introduction_txt">黑白色</div>
                </li>
            </ul>
            <ul class="basic_detail">
                <li class="basic_detail_phone">03-4861 760</li>
                <li class="basic_detail_address">
                    桃園市新屋區永興里3鄰藻礁路1668號
                </li>
                <li class="basic_detail_txt">
                    本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約。
                </li>
            </ul>
        </div>

        <button class="close_btn" @click="close">
            <svg
                class="showPC"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
            >
                <path :d="icon_all.unlike" />
            </svg>

            <svg
                class="showPAD"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 25"
            >
                <path :d="icon_all.arrowLeft" />
            </svg>
        </button>

    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    components: {
    },
    mounted() {},
    computed: {},
    methods: {
        close() {
            this.$router.push("/home");
        },
    },
};
</script>
