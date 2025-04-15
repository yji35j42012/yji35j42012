<style scoped></style>

<template>
    <div class="sportHead_tab">
        <div :class="['sportHead_tab_item', tabItemNum == 0 ? 'on' : '']" @click="tabHandler(0)">主要玩法</div>
        <div :class="['sportHead_tab_item', tabItemNum == 1 ? 'on' : '']" @click="tabHandler(1)">讓球&大小</div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            tabItemNum: 0
        }
    },
    computed: {},
    methods: {
        tabHandler(i) {
            this.tabItemNum = i
        }
    },
}
</script>
