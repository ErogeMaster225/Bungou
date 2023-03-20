<template>
    <div id="authScreen">
        <div id="authBackground" />
        <NuxtPage />
    </div>
</template>

<style scoped>
#authScreen {
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    overflow: hidden;
}
#authBackground {
    height: 100%;
    width: 55%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/authBG.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    mask-image: linear-gradient(90deg, #E9E7E5 13.95%, rgba(233, 231, 229, 0.8) 78.67%, rgba(233, 231, 229, 0) 100%);
}
</style>
