<script setup lang="ts">
import { ref } from "vue"
const selectElementRef = ref<HTMLSelectElement | null>(null)
function handleChange() {
    console.log("change event called")
}

function handleInput() {
    console.log("input event called")
}
</script>

<template>
    <BaseSection title="<select> element">
        <select
            id="test-select"
            ref="selectElementRef"
            name="test-select-name"
            @input="handleInput"
            @change="handleChange"
        >
            <option value="1">a</option>
            <option value="2">b</option>
            <option value="3">c</option>
            <option value="4">d</option>
            <option value="5">e</option>
        </select>

        <p>
            value of selected element:
            {{ selectElementRef?.value }}
        </p>
    </BaseSection>
</template>
