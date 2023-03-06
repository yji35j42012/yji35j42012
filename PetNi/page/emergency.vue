<style scoped></style>

<template>
    <div class="container">
        <div style="display:none">
            {{ showLists }}
        </div>
        <div class="emergency_head">
            <div class="name showPAD" data-txt="急診">24H</div>
            <ul class="tab">
                <li
                    @click="emergency_area('N')"
                    :class="area == 'N' ? 'on' : ''"
                >
                    北部
                </li>
                <li
                    @click="emergency_area('W')"
                    :class="area == 'W' ? 'on' : ''"
                >
                    中部
                </li>
                <li
                    @click="emergency_area('S')"
                    :class="area == 'S' ? 'on' : ''"
                >
                    南部
                </li>
                <li
                    @click="emergency_area('E')"
                    :class="area == 'E' ? 'on' : ''"
                >
                    東部
                </li>
            </ul>
            <span>*資訊僅供參考，建議先電話聯絡再前往。</span>
        </div>

        <ul
            class="emergency_group"
            v-for="(outItem, outIndex) in showLists.city_map"
            :key="outIndex"
        >
            <li class="emergency_group_title">
                <i v-html="icon_all.address"></i>
                {{ showLists.city_map[outIndex] }}
            </li>
            <li
                class="emergency_group_card"
                v-for="(insideItem, insideIndex) in showLists.list_obj[
                    showLists.city_map[outIndex]
                ]"
                :key="insideIndex"
            >
                <div class="detail">
                    <p class="title">{{ insideItem.name }}</p>
                    <p>{{ insideItem.phone }}</p>
                    <p>{{ insideItem.address }}</p>
                </div>
                <div class="state">
                    <span :class="insideItem.epidemic ? '' : 'hide'">
                        *疫情期間有開
                    </span>
                    <a href="" v-html="icon_all.phone"></a>
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
            areaData: area,
            area: "N",
        };
    },
    components: {},
    mounted() {},
    computed: {
        showLists() {
            if (this.areaData == null) return;
            var lists_obj = {
                city_map: [],
                list_obj: {},
            };
            this.areaData[this.area].forEach((item) => {
                if (lists_obj.city_map.indexOf(item.city) == -1) {
                    lists_obj.city_map.push(item.city);
                    lists_obj.list_obj[item.city] = [];
                }
                lists_obj.list_obj[item.city].push({
                    name: item.name,
                    phone: item.phone,
                    address: item.address,
                    epidemic: item.epidemic,
                });
            });
            return lists_obj;
        },
    },
    methods: {
        emergency_area(str) {
            if (this.area !== str) {
                this.area = str;
            }
        },
    },
};
</script>
