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
                                <span>{{ nameId }}</span>
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
                        <button class="like_btn" >
                          <i v-html="icon_all.like"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="basic">
            <div class="basic_info">
                <span>
                    <p class="name female">{{ nameId }}</p>
                    <p class="address">臺南市南區</p>
                </span>
                <button class="like_btn">
                    <i v-html="icon_all.like"></i>
                </button>
            </div>
            <ul class="basic_serial">
                <li class="big">
                    <span>{{ subid }}</span>
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
                        <i v-html="icon_all.status"></i>
                    </div>
                    <div class="basic_introduction_txt">求包養</div>
                </li>
                <li>
                    <div class="basic_introduction_pic">
                        <i v-html="icon_all.female"></i>
                    </div>
                    <div class="">女生</div>
                </li>
                <li>
                    <div class="basic_introduction_pic">
                        <i v-html="icon_all.theme"></i>
                    </div>
                    <div class="basic_introduction_txt">黑白色</div>
                </li>
            </ul>
            <ul class="basic_detail">
                <li class="basic_detail_phone">{{ tel }}</li>
                <li class="basic_detail_address">{{ address }}</li>
                <li class="basic_detail_txt">{{ remark }}</li>
            </ul>
        </div>

        <button class="close_btn" @click="close" style="display:none">
            <i v-html="icon_all.unlike"></i>
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
            nameId: null,
            subid: null,
            tel: null,
            address: null,
            remark: null,
        };
    },
    components: {},
    mounted() {
        let detailId = this.$route.params.id;

        store.state.petData.forEach((item) => {
            if (detailId == item.animal_id) {
                this.nameId = item.animal_id;
                this.subid = item.animal_subid;
                this.tel = item.shelter_tel;
                this.address = item.shelter_address;
                this.remark = item.animal_remark;
                console.log("detailId item", item);
            }
        });
    },
    computed: {},
    methods: {
        close() {
            // this.$router.push("/home");
        },
    },
};
</script>
