<script setup lang="ts">
import { ref } from "vue"
const selectedValue = ref<number>(1)
function handleChange() {
    console.log("change event called")
}

function handleInput() {
    console.log("input event called")
}

function handleKeydown(e: KeyboardEvent) {
    console.log("select key down: ", e.key)
}

function handleDivKeydown(e: KeyboardEvent) {
    console.log("div key down:", e.key)
}

const vals = [1, 2, 3, 4, 5]
</script>

<template>
    <BaseSection title="<select> element">
        <div @keydown="handleDivKeydown">
            <ul class="mb-8 list-inside list-disc">
                <li>
                    Keydown events are called for all child elements unless
                    suppressed
                </li>
                <li>input event is called before change event</li>
                <li>input and change events are called before keydown event</li>
                <li>
                    When focus is on an item in an expanded list box, it is not
                    considered to be on the listbox
                </li>
                <li>
                    In fact, it isn't even considered to be inside the parent
                    div
                </li>
                <li>
                    Pressing Esc closes the list box, but doesn't cancel the
                    select -- the value will be changed to the highlighted value
                </li>
                <li class="font-bold">There is no way of cancelling the selection once the listbox is expanded</li>
            </ul>
            <p
                class="mb-4 rounded border-2 border-emerald-950 p-1"
                tabindex="0"
            >
                This is a tabbable paragraph -- to prove handleDivKeydown
            </p>
            <select
                id="test-select"
                v-model="selectedValue"
                name="test-select-name"
                @input="handleInput"
                @change="handleChange"
                @keydown="handleKeydown"
            >
                <option v-for="val in vals" :key="val" :value="val">
                    {{ val }}
                </option>
            </select>
        </div>

        <p>
            value of selected element:
            {{ selectedValue }}
        </p>
    </BaseSection>
</template>
