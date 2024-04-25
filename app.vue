<script setup lang="ts">
import type { TransitionProps } from "vue"

useHead({
    title: "Aria Playground",
})
const transition: TransitionProps = {
    enterFromClass: "opacity-0",
    enterToClass: "opacity-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0",
    enterActiveClass: "duration-200",
    leaveActiveClass: "duration-200",
    mode: "out-in",
}
</script>

<template>
    <TheHeader />
    <main id="main-content" class="p-1 text-emerald-950">
        <NuxtPage :transition="transition" />
    </main>
</template>
