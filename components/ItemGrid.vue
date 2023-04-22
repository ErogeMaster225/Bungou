<script setup>
const bookStore = useBookStore()
</script>

<template>
    <div class="store" :style="{ '--total': bookStore.bookList.length }">
        <TransitionGroup
            name="card-slide"
        >
            <div
                v-for="(book, index) in bookStore.bookList"
                :key="index"
                class="item"
                :style="{ '--index': index }"
            >
                <div class="thumbnail">
                    <img :src="book.image" alt="">
                    <div class="action">
                        <i class="fa-solid fa-2x fa-square-heart" />
                        <i class="fa-solid fa-2x fa-cart-shopping" />
                    </div>
                </div>
                <div class="title">
                    {{ book.title }}
                </div>
                <div class="itemDetails right">
                    <div class="author">
                        {{ book.author }}
                    </div>
                    <div class="genre">
                        {{ book.categories }}
                    </div>
                    <div class="price">
                        {{ `$${book.price}` }}
                    </div>
                    <div class="rating">
                        {{ book.rating }}
                    </div>
                    <div class="year">
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
    margin: 20px 30px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;
}
.item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item:hover > .itemDetails {
    animation: fadein 0.3s linear;
    opacity: 1;
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
