<style scoped></style>

<template>
    <div id="tbBox" class="tbBox" style="color: #fff">
        <div class="tbBox_function">
            <!-- <button class="normal_btn _add">
                新增
            </button> -->
            <!-- <button class="normal_btn _add" @click="storage('get')">
						顯示storage
					</button> -->
            <!-- <button class="normal_btn _add" @click="storage('del')">
                刪除storage
            </button> -->
            <!-- <input
                type="text"
                class="normal_inp"
                v-model="filiterInp"
                placeholder="隨便搜"
            /> -->
        </div>
        <div id="scroll_y" class="scroll_y">
            <div class="tbBox_head">
                <table>
                    <tr>
                        <th width="10%">排名</th>
                        <th width="10%">店名</th>
                        <!-- <th width="10%">今天點什麼</th>
                        <th width="10%">好吃嗎</th>
                        <th width="10%">動作快速嗎</th>
                        <th width="10%">夠吃嗎</th>
                        <th width="20%">心得</th>
                        <th width="10%">填寫人</th>
                        <th width="10%">日期</th>
                        <th width="10%">功能</th> -->
                    </tr>
                </table>
            </div>
            <div class="tbBox_body">
                <table>
                    <tr v-for="(item, index) in scoreList" :key="index">
                        <td>{{ item.score_sort }}</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            scoreList: null,
            menu: {
                now: "sc",
            },
        };
    },
    mounted() {
        axios({
            method: "get",
            url: "/api/getData.php",
            "Content-Type": "application/json",
        })
            .then((res) => {
                let score_obj = {
                    score_sort: [],
                    score_map: {},
                };
                res.data.forEach((item) => {
                    if (!score_obj.score_map[item[1]]) {
                        score_obj.score_sort.push(item[1]);
                        score_obj.score_map[item[1]] = {
                            score_sort: [],
                            score_total: 0,
                        };
                    }
                    score_obj.score_map[item[1]].score_total =
                        parseInt(score_obj.score_map[item[1]].score_total) +
                        parseInt(item[3]);
                });
                // console.log("score_obj", score_obj);
                this.scoreList = score_obj;
            })
            .catch((err) => {
                console.error(err);
            });

        // console.log(this.scoreList);
    },
    computed: {},
    methods: {},
};
</script>
