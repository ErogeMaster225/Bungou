<script setup>
import ky from 'ky'
definePageMeta({
    layout: 'main',
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
})
const route = useRoute()
const bookStore = useBookStore()
const api = ky.create({
    prefixUrl: 'https://bungou-backend-production.up.railway.app/api/v1',
})
async function bookSearchRequest(id) {
    const response = await api.get('book/' + id).json()
    bookStore.bookDetails.title = response.data.title
    bookStore.bookDetails.image = response.data.image
    bookStore.bookDetails.releaseDate = response.data.year
    bookStore.bookDetails.price = Number(response.data.price)
    bookStore.bookDetails.rating = Number(response.data.rating)
    bookStore.bookDetails.author = response.data.author
    bookStore.bookDetails.publisher = response.data.publisher
    bookStore.bookDetails.length = response.data.length
    bookStore.bookDetails.categories = response.data.categories.split(',')
}
onBeforeMount(() => {
    bookSearchRequest(route.params.id)
})
</script>

<template>
    <div class="container">
        <div class="bookCover">
            <img :src="bookStore.bookDetails.image" alt="">
        </div>
        <div class="bookDetails">
            <div class="title">
                {{ bookStore.bookDetails.title }}
            </div>
            <div class="author">
                <span>by</span>
                {{ bookStore.bookDetails.author }}
            </div>
            <div class="price">
                $ {{ bookStore.bookDetails.price }}
            </div>
            <div class="rating">
                <div v-for="rating in bookStore.bookDetails.rating" :key="rating">
                    <i class="fa-solid fa-star fa-2x" />
                </div>
            </div>
            <div class="description">
                <div>Description</div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perspiciatis nesciunt ratione numquam quae illo magnam! Molestias rem consequuntur hic iusto iste blanditiis debitis et, eligendi, eius minus unde fugit quisquam nesciunt ab aperiam, illum eum at id! Saepe voluptas rerum eaque cumque. Cum laboriosam molestiae, necessitatibus perferendis tempora vel inventore odit id quidem maiores aliquid deleniti commodi corrupti nostrum velit repellat magni sapiente quia sequi! Nulla eveniet eaque fugiat molestias maiores ipsam, impedit optio corporis repudiandae obcaecati. Cumque soluta sit quos consequuntur, magnam, neque perferendis unde inventore dolorem vel ab. Quod suscipit soluta quo dolorem quaerat quae expedita cum.
            </div>
            <div class="button">
                <div class="buy">
                    <i class="fa-solid fa-cart-shopping" />
                    Buy now
                </div>
                <!-- <div class="wishlist">
                    <i class="fa-solid fa-heart" />
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display:flex;
    flex-direction: row;
    padding: 20px 50px;
    margin: 10px;
}
.container > div {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
}
.bookCover > img {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}
.container .bookDetails {
    font-family: 'Fredoka';
    margin: 0 20px;
    align-items: flex-start;
}
.bookDetails .title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
}
.bookDetails .author {
    font-size: 1.5rem;
    font-weight: 500;
}
.bookDetails .author span {
    font-weight: 400;
}
.bookDetails .price {
    font-size: 2rem;
}
.bookDetails .rating {
    display: flex;
    flex-direction: row;
}
.bookDetails .rating i {
    color: #f7c03c
}
.bookDetails .description {
    margin-top: 10px;
    font-size: 1rem;
    text-align: justify;
    font-family: 'Fredoka';
}
.bookDetails .description > div {
    font-weight: 700;
    font-size: 1.5rem;
}
.bookDetails .button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.bookDetails .button > div {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: "Fredoka";
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
}
.bookDetails .button .buy {
    background-color: #3577ff;
    transition: box-shadow .4s ease;
}
.bookDetails .button .buy:hover {
    box-shadow: 0 2px 43px rgba(53, 119, 255, 0.7);
}
.bookDetails .button .wishlist {
    background-color: black;
}
.bookDetails .button .buy i {
    padding: 5px 10px 0 0;
}
.bookDetails .button .wishlist i {
    padding-right: 10px;
    color: #fe8383;
}
</style>
