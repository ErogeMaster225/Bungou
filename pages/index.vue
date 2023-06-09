<script setup>
definePageMeta({
    layout: 'main',
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
})
</script>

<template>
    <div class="store_page">
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
.store_page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
}
</style>
