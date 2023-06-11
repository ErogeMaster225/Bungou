<script setup>
import ky from 'ky'
definePageMeta({
    layout: 'main',
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
})
const bookStore = useBookStore()
const api = ky.create({
    prefixUrl: 'https://rotten-milk-production.up.railway.app/api/v1',
})
async function bookSearchRequest() {
    bookStore.bookList = []
    response = await api.get('book?limit=50').json()
    bookStore.bookList = response.rows
}
onMounted(() => {
    document.getElementById('search_box').value = ''
    const inputs = document.querySelectorAll('.checkbox > input')
    inputs.forEach((input) => {
        if (input.checked)
            input.checked = false
    })
    bookSearchRequest()
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
