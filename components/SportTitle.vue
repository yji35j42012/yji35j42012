<style scoped></style>

<template>
    <div class="sportTitle">
        <i class="icon_back" v-html="icon_all.icon_back"></i>
        <span>{{ msg }}</span>
        <i class="icon_reload" v-html="icon_all.icon_reload"></i>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        }
    },
    props: ['msg'],
    components: {
    },
    computed: {},
    methods: {},
}
</script>
