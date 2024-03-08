<script setup lang="ts">
const { announcementTitle, announcementText, listOfThings } = defineProps<{
    announcementTitle: string
    announcementText: string
    listOfThings: string[]
}>()
</script>

<template>
    <section id="aria-live-area">
        <div
            class="w-1/2 rounded-xl border-4 border-dashed border-gray-500 bg-gray-100 p-4 text-center text-gray-700"
            aria-live="polite"
            aria-atomic="false"
        >
            <h2 class="text-xl font-bold">Aria Live Area</h2>
            <p class="text-sm italic">Changes in this area are announced</p>
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
