<template>
    <div class="home">
        <NavBar />
        <slot />
    </div>
</template>

<style scoped>
.home {
    width: 100vw;
    background: #edf1f5;
    min-height: 100vh;
}
</style>
