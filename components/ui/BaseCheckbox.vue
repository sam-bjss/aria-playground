<script setup lang="ts">
const { modelValue, label, name, hiddenLabel } = defineProps<{
    modelValue: boolean
    label: string
    name: string
    hiddenLabel: boolean
}>()
const emit = defineEmits(["update:modelValue"])

function updateModelValue(eventTarget: EventTarget) {
    // this line works; the TS parser doesn't know what it's talking about
    // @ts-ignore
    emit("update:modelValue", eventTarget.checked)
}
</script>

<template>
    <div
        class="m-2 w-1/2 space-x-2 rounded-2xl border-2 border-double border-gray-700 p-2"
    >
        <input
            :id="name"
            :ref="name"
            class="m-2 scale-150 rounded accent-emerald-600 outline-none ring-emerald-400 focus:ring-2"
            type="checkbox"
            :checked="modelValue"
            @change="updateModelValue($event.target!)"
        />
        <label :for="name" :class="cn({ 'hidden-label': hiddenLabel })">
            {{ label }}
        </label>
    </div>
</template>
