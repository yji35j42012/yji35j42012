<template>
    <li v-for="item in products" :key="item.product_id">{{ item.product_name }}</li>
</template>

<script>
export default {
    // UserComponent組件的邏輯
    props: ['products'],
};
</script>