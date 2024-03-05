<script setup lang="ts">
type Seat = {
    seatNumber: number
    value: boolean
}

const seatRows: { rowNumber: number; seats: Seat[] }[] = []

let seatNumber = 1
for (let rowNumber = 0; rowNumber < 10; rowNumber++) {
    const seats = []
    for (let j = 0; j < 10; j++) {
        seats.push({ seatNumber, value: false })
        seatNumber++
    }
    seatRows.push({ rowNumber, seats })
}
</script>

<template>
    <BaseSection class="w-full" title="Restyled Checkboxes">
        <div v-for="row in seatRows" :key="row.rowNumber">
            <RestyledCheckbox
                v-for="seat in row.seats"
                :key="seat.seatNumber"
                v-model="seat.value"
                :row-number="row.rowNumber"
                :seat-number="seat.seatNumber"
            />
        </div>
    </BaseSection>
</template>
