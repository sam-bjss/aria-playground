<script setup lang="ts">
useHead({
    title: "Aria Playground",
})
</script>

<template>
    <h1
        class="bg-gradient-to-bl from-emerald-400 from-20% to-white px-1 text-4xl"
    >
        Aria Playground.
    </h1>
    <div id="page-container" class="px-1 text-emerald-950">
        <NuxtPage />
    </div>
</template>
