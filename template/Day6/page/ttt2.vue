<style scoped></style>

<template>
    <div id="tbBox" class="tbBox">
        <button @click="inddd">按我啊</button>
        {{ count }}
    </div>
</template>

<script>
module.exports = {
    data() {
        return {};
    },
    computed: {
        count() {
            return store.state.count;
        },
    },
    methods: {
        inddd() {
            store.commit("ddddd");
        },
    },
};
</script>
