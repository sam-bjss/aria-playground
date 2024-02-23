<script setup lang="ts">
const { announcementTitle, announcementText, listOfThings } = defineProps<{
    announcementTitle: string
    announcementText: string
    listOfThings: string[]
}>()
</script>

<template>
    <section id="aria-live-area">
        <div class="hidden-label" aria-live="polite" aria-atomic="false">
            <h2 class="text-3xl font-bold">Aria Live Area</h2>
            <h3 class="text-lg font-semibold">
                The message to announce is:
                <span>{{ announcementTitle }}</span>
            </h3>
            <p>{{ announcementText }}</p>
        </div>
        <ul>
            <li v-for="thing in listOfThings" :key="thing">
                {{ thing }}
            </li>
        </ul>
    </section>
</template>
