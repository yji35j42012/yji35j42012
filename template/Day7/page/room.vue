<style scoped></style>

<template>
    <div class="container">
        <div class="photo">
            <div class="photo_item _big">
                <img src="./images/room1.jpg" alt="" />
            </div>
            <div class="photo_item">
                <div class="photo_item_f">
                    <img src="./images/room2.jpg" alt="" />
                </div>
                <div class="photo_item_s">
                    <img src="./images/room3.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="room_box">
            <div class="room_info">
                <h2>Deluxe Double Room</h2>
                <ul>
                    <li>房客評價 (128)</li>
                    <li>
                        <span class="material-icons"> star </span>
                        <span class="material-icons"> star </span>
                        <span class="material-icons"> star </span>
                        <span class="material-icons"> star_outline </span>
                    </li>
                </ul>
            </div>
            <div class="room_reserve">
                <ul class="room_reserve_price">
                    <li
                        class="room_reserve_price_item"
                        data-bef="平日(週一 ~週四)"
                        data-aft="/日"
                    >
                        $2,888
                    </li>
                    <li
                        class="room_reserve_price_item"
                        data-bef="假日(週五~週日)"
                        data-aft="/日"
                    >
                        $3,000
                    </li>
                </ul>
                <div class="room_reserve_box">
                    <label>
                        <p>姓名</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>連絡電話</p>
                        <input type="text" />
                    </label>
                    <label  class="date">
                        <p>入住日期</p>
                        <div class="date_box">
                            <span>2021/05/22</span>
                            <span class="material-icons"> expand_more </span>
                        </div>
                    </label>
                    <label  class="date">
                        <p>退房日期</p>
                        <div class="date_box">
                            <span>2021/05/22</span>
                            <span class="material-icons"> expand_more </span>
                        </div>
                    </label>
                    <button class="normal_btn">預訂房間</button>
                    <!-- <div class="date">
                        <label class="normal_select" data-txt="">
                            <span>2021/05/22</span>
                            <span class="material-icons"> expand_more </span>
                        </label>
                        <label class="normal_select">
                            <span>2021/05/22</span>
                            <span class="material-icons"> expand_more </span>
                        </label>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>
