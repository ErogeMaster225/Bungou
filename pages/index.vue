<script setup>

</script>

<template>
    <div class="home">
        <side-bar />
        <item-grid />
    </div>
</template>

<style scoped>
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 4rem);
    font-size: 64px;
    font-weight: 700;
}
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
}
</style>
