<script setup>
import ky from 'ky'
const bookStore = useBookStore()
const api = ky.create({
    prefixUrl: 'https://bungou-backend-production.up.railway.app/api/v1',
})
let typingTimer
const bookSearch = () => {
    clearTimeout(typingTimer)
    if (document.getElementById('search_box').value)
        typingTimer = setTimeout(doneTyping, 750)
    else bookSearchRequest('All')
}
async function bookSearchRequest(query) {
    bookStore.bookList = []
    let response
    if (query === 'All')
        response = await api.get('book/get?limit=50').json()
    else
        response = await api.get('book/get?limit=50&search=' + query.split(' ').join('_')).json()
    bookStore.bookList = response.rows
}
function doneTyping() {
    bookSearchRequest(document.getElementById('search_box').value)
}
</script>

<template>
    <div class="bar">
        <NuxtLink to="/" class="link">
            <div class="logo">
                <img
                    src="/favicon.ico"
                    alt="Breaking Borders Logo"
                    height="36"
                    width="36"
                >
                <span class="title">Bungou</span>
            </div>
        </NuxtLink>
        <div class="searchBox">
            <div class="searchIcon">
                <i class="fa-light fa-magnifying-glass" />
            </div>
            <input
                id="search_box"
                type="search"
                name="searchField"
                placeholder="What are you looking for?"
                @keyup="bookSearch"
            >
        </div>
        <div class="user-profile">
            <div class="profile-button">
                <img
                    src="https://a.ppy.sh/8471225?1671713737.gif"
                    alt="Guest"
                >
                <span>Hi, ErogeMaster225!</span>
                <i class="fa-solid fa-caret-down fa-2xl" />
            </div>
            <div class="dropdown-menu">
                <NuxtLink to="/auth/signup" class="dropdown-button">
                    <i class="fa-solid fa-user" />
                    <div>Profile</div>
                </NuxtLink>
                <NuxtLink to="/auth/signup" class="dropdown-button">
                    <i class="fa-solid fa-heart" />
                    <div>Wishlist</div>
                </NuxtLink>
                <NuxtLink to="/auth/signup" class="dropdown-button">
                    <i class="fa-solid fa-right-from-bracket" />
                    <div>Sign Up</div>
                </NuxtLink>
            </div>
        </div>
        <!-- <div class="user">
            <NuxtLink to="/auth/signin" class="link">
                Sign in
            </NuxtLink>
            <NuxtLink to="/auth/signup" class="link">
                Sign up
            </NuxtLink>
        </div> -->
    </div>
</template>

<style scoped>
* {
    font-weight: 500;
}
.bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    height: 4rem;
    background: transparent;
}
.logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.link {
    margin: 0 0.5rem;
    color: #696969;
    text-decoration: none;
}
.link:hover {
    color: #000;
}
.user {
    display: flex;
    align-items: center;
}
.title {
    margin-left: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
}
.searchBox {
    align-items: center;
    display: flex;
    background-color: #fff;
    padding: 0.5em;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.searchIcon {
    position: relative;
    width: 2em;
    height: 0;
    padding-bottom: 2em;
    border-radius: 5px;
}
.searchIcon i {
    margin: 50% 0 0 50%;
    transform: translate(-50%, -50%);
}
.searchBox input {
    height: 20px;
    width: 600px;
    border: none;
    background-color: transparent;
    outline: none;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    padding-left: 20px;
}
.user-profile {
    position: relative;
}

.profile-button {
    margin: 0;
    padding: 0;
    color: #000;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.profile-button > span {
    padding: 0 10px;
}
.profile-button img {
    height: 48px;
    width: 48px;
    line-height: 48px;
    border-radius: 12px;
}

.dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s ease-in;
    border-radius: 12px;
    align-items: flex-end;
    background-color: #fff;
    width: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translateY(-15px);
}
.user-profile:hover .dropdown-menu {
    opacity: 1;
    transform: translateY(0);
}

.dropdown-button {
    width: 100%;
    color: #333;
    border: none;
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    transition: color 0.2s linear, background-color 0.4s linear;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.dropdown-button i {
    margin-left: 10px;
}
.dropdown-button > div {
    padding: 10px 16px;
}
.dropdown-button:first-child {
    border-radius: 12px 12px 0 0;
}
.dropdown-button:last-child {
    border-radius: 0 0 12px 12px;
}
.dropdown-button:hover {
    background-color: #3d45ee;
    color: #fff;
}
.fa-caret-down {
    color: #000;
}
</style>
