<script setup>
import ky from 'ky'
const userStore = useUserStore()
const api = ky.create({
    prefixUrl: 'https://rotten-milk-production.up.railway.app/api/v1',
})
async function getOrders() {
    const response = await api.get('order/getorder/' + userStore.userDetails.id).json()
    response.forEach((order) => {
        userStore.library.push(order.Books)
    })
    userStore.library = userStore.library.filter((v, i, a) => a.findIndex(v2 => v2.BookId === v.BookId) === i)
}
onMounted(() => {
    userStore.library = []
    getOrders()
})
</script>

<template>
    <div class="store" :style="{ '--total': userStore.library.length }">
        <TransitionGroup
            name="card-slide"
        >
            <div
                v-for="(book, index) in userStore.library"
                :key="index"
                class="item"
                :style="{ '--index': index }"
                @click="$router.push(`/details/${book.BookId}`)"
            >
                <div class="thumbnail">
                    <img :src="book.image" alt="">
                </div>
                <div class="title">
                    {{ book.title }}
                </div>
                <div class="itemDetails" :class="[index % 5 === 4 ? 'left' : 'right']">
                    <div class="author">
                        <i class="icon"><i class="fa-solid fa-user-pen" /></i>
                        {{ book.author }}
                    </div>
                    <div class="genre">
                        <i class="icon"><i class="fa-solid fa-tags" /></i>
                        {{ book.categories }}
                    </div>
                    <div class="price">
                        <i class="icon"><i class="fa-solid fa-dollar-sign" /></i>
                        {{ book.price }}
                    </div>
                    <div class="rating">
                        <i class="icon"><i class="fa-solid fa-star" /></i>
                        {{ book.rating }}
                    </div>
                    <div class="year">
                        <i class="icon"><i class="fa-solid fa-calendar-days" /></i>
                        {{ book.year }}
                    </div>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.store {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 40px;
    margin: 20px 30px 20px 10%;
    position: relative;
    width: 80%;
    height: 100%;
}
.item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.item:hover > .itemDetails {
    animation: fadein 0.2s linear;
    opacity: 1;
}
.icon {
    display: inline-block;
    text-align: center;
    width: 20px;
}
.thumbnail {
    position: relative;
    border-radius: 10px;
    aspect-ratio: 2/3;
    overflow: hidden;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
        0 4px 4px rgba(103, 132, 187, 0.25);
}
.thumbnail img {
    height: 100%;
    width: 100%;
}
.itemDetails {
    font-family: 'Overpass';
    font-size: 1rem;
    position: absolute;
    width: 100%;
    top: 5px;
    opacity: 0;
    transition: all 0.2s ease-out;
    border-radius: 10px;
    background: #fbfbfb;
    z-index: 10;
    user-select: none;
    pointer-events: none;
    padding: 24px;
    box-shadow: 0 14px 30px rgba(103, 132, 187, 0.15),
        0 4px 4px rgba(103, 132, 187, 0.25);
}
@keyframes fadein {
    0% {
        opacity: 0;
        transform: scale(0.92);
    }
    60% {
        opacity: 1;
    }
    100% {
        transform: none;
    }
}
.itemDetails.right {
    left: 100%;
    margin-left: 15px;
}
.itemDetails.left {
    right: 100%;
    margin-right: 15px;
}
.itemDetails::before {
    position: absolute;
    content: '';
    top: 18px;
    width: 0;
    height: 0;
    z-index: 2;
    transform: scale(1.01);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}
.itemDetails.right::before {
    right: 100%;
    border-right: 10px solid #fbfbfb;
}
.itemDetails.left::before {
    left: 100%;
    border-left: 10px solid #fbfbfb;
}
.title {
    margin-top: 10px;
    width: 100%;
    font-family: 'Overpass';
    font-size: 16px;
    font-weight: 600;
    color: rgb(116, 136, 153);
    transition: color 0.2s ease;
}
.item:hover > .title {
    color: hsl(185,99%,42%);
}
.action {
    z-index: 5;
    position: absolute;
    left: 5%;
    bottom: 5%;
    border-radius: 50%;
}
.action i {
    margin: 0 10px;
    color: #fff;
}
.card-slide-move {
    transition: opacity 0.5s linear, transform 0.5s ease-in-out;
}
.card-slide-leave-active {
    transition: opacity 0.4s linear,
        transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4);
    transition-delay: calc(0.1s * (var(--total) - var(--i)));
}
.card-slide-enter-active {
    transition: opacity 0.5s linear,
        transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
    transition-delay: calc(0.1s * var(--index));
}
.card-slide-enter-from,
.card-slide-leave-to {
    opacity: 0;
}
.card-slide-enter-from {
    transform: translateX(-1em);
}
.card-slide-leave-to {
    transform: translateX(1em);
}
</style>
