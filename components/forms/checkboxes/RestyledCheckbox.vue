<script setup lang="ts">
const { rowNumber, seatNumber } = defineProps<{
    rowNumber: number
    seatNumber: number
}>()

const model = defineModel<boolean>()

const boxId = `row-${rowNumber}-seat-${seatNumber}`
</script>

<template>
    <div class="inline-block p-1">
        <input
            :id="boxId"
            v-model="model"
            class="restyled-checkbox inline-block p-1 ring-2 transition-colors"
            type="checkbox"
        />
        <label :for="boxId" class="hidden-label">
            {{ `Row ${rowNumber} Seat ${seatNumber};` }}
        </label>
    </div>
</template>
