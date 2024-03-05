<script setup lang="ts">
import type { TransitionProps } from "vue"

useHead({
    title: "Aria Playground",
})
const transition: TransitionProps = {
    enterFromClass: "translate-x-[100vw] opacity-0",
    enterToClass: "translate-x-0 opacity-100",
    leaveFromClass: "translate-x-0 opacity-100",
    leaveToClass: "-translate-x-[100vw] opacity-0",
    enterActiveClass: "duration-200",
    leaveActiveClass: "duration-200",
    mode: "out-in",
}
</script>

<template>
    <TheHeader />
    <div id="page-container" class="p-1 text-emerald-950">
        <NuxtPage :transition="transition" />
    </div>
</template>
