<template>
    <NuxtLayout name="main">
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
* {
    scrollbar-width: none;
}
*::-webkit-scrollbar {
    display: none;
}
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
}
html.dark {
    background: #222;
    color: white;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
/*
.slide-in-enter-active,
.slide-in-leave-active {
    transition: all 0.6s ease-out;
}
.slide-in-enter-from {
    transform: translateY(100%);
    opacity: 0.5;
    z-index: 1;
}
.slide-in-leave-to {
    opacity: 0;
    z-index: 0;
} */
</style>
