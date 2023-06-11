<script setup>
import ky from 'ky'
const api = ky.create({
    prefixUrl: 'https://rotten-milk-production.up.railway.app/api/v1/book',
})
const upload = () => {
    const title = document.getElementById('titleField').value
    const year = Number(document.getElementById('yearField').value)
    const price = Number(document.getElementById('priceField').value)
    const author = document.getElementById('authorField').value
    const publisher = document.getElementById('publisherField').value
    const length = Number(document.getElementById('lengthField').value)
    const isbn = document.getElementById('isbnField').value
    const citycountry = document.getElementById('citycountryField').value
    const categories = document.getElementById('categoriesField').value
    uploadRequest(title, year, price, author, publisher, length, isbn, citycountry, categories)
}
async function uploadRequest(title, year, price, author, publisher, length, isbn, citycountry, categories) {
    const response = await api.post('uploadBook', { json: { title, year, price, author, publisher, length, isbn, citycountry, categories } }).json()
    const bookId = response[0].BookId
    const body = new FormData()
    const file = document.getElementById('imageField').files[0]
    body.append('upload', file)
    const imageurl = await api.post('upload', { body }).json()
    const reponse1 = await api.put('addImage', { json: { id: bookId, url: imageurl } }).json()
}
</script>

<template>
    <form>
        <div class="inputBox">
            <input
                id="titleField"
                type="text"
                name="title"
                required
                placeholder="Title"
            >
        </div>
        <div class="inputBox">
            <input
                id="yearField"
                type="text"
                name="year"
                required
                placeholder="Year"
            >
        </div>
        <div class="inputBox">
            <input
                id="priceField"
                type="text"
                name="price"
                required
                placeholder="Price"
            >
        </div>
        <div class="inputBox">
            <input
                id="authorField"
                type="text"
                name="author"
                required
                placeholder="Author"
            >
        </div>
        <div class="inputBox">
            <input
                id="publisherField"
                type="text"
                name="publisher"
                required
                placeholder="Publisher"
            >
        </div>
        <div class="inputBox">
            <input
                id="lengthField"
                type="text"
                name="length"
                required
                placeholder="Length"
            >
        </div>
        <div class="inputBox">
            <input
                id="isbnField"
                type="text"
                name="isbn"
                required
                placeholder="ISBN"
            >
        </div>
        <div class="inputBox">
            <input
                id="citycountryField"
                type="text"
                name="citycountry"
                required
                placeholder="Country"
            >
        </div>
        <div class="inputBox">
            <input
                id="categoriesField"
                type="text"
                name="categories"
                required
                placeholder="Categories"
            >
        </div>
        <input id="imageField" type="file" name="image">
        <div class="inputBox">
            <button id="signInButton" type="submit" name="submit" @click.prevent="upload()">
                Upload book
            </button>
        </div>
    </form>
</template>

<style scoped>
form {
    height: 100%;
    width: 60vw;
    margin-left: 20vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
}
input {
    color: #000;
    font-family: 'Inter';
    font-weight: 700;
    background-color: transparent;
    border: none;
    min-width: 20px;
    width: 100%;
    height: 64px;
    flex: 1 1 auto;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: 3.6px 7.2px 21.6px rgba(149, 157, 165, 0.4);
    border-radius: 10px;
    margin: 15px 0;
    font-size: 11pt;
}
input::placeholder {
    color: #000;
}
button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
img {
    margin-right: 10px;
}
</style>
