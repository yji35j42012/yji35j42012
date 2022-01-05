<style scoped></style>

<template>
    <div class="book">
        <label class="normal_inp">
            <p>check in</p>
            <div class="date">
                <input type="text" value="19/08/2019" />
                <span class="material-icons icon_date">
                    calendar_today
                </span>
            </div>
        </label>
        <label class="normal_inp">
            <p>check out</p>
            <div class="date">
                <input type="text" value="19/08/2019" />
                <span class="material-icons icon_date">
                    calendar_today
                </span>
            </div>
        </label>
        <div class="count">
            <p>adults</p>
            <button class="count_change">-</button>
            <div class="count_num">0</div>
            <button class="count_change">+</button>
        </div>
        <div class="count">
            <p>Kids</p>
            <button class="count_change">-</button>
            <div class="count_num">0</div>
            <button class="count_change">+</button>
        </div>
        <button></button>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {}
    },
}
</script>
