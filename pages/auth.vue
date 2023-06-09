<script setup>
definePageMeta({
    layout: 'authentication',
    pageTransition: {
        name: 'fade',
        mode: 'out-in',
    },
})
</script>

<template>
    <NuxtLayout name="authentication">
        <NuxtPage />
    </NuxtLayout>
</template>
