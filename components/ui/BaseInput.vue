<script setup lang="ts">
const { name, label } = defineProps<{ name: string; label: string }>()

const model = defineModel<string>()
const inputId = computed(() => `${name}-id`)
</script>

<template>
    <div class="space-x-2">
        <label
            :for="inputId"
            class="text-sm font-semibold uppercase text-emerald-800"
            >{{ label }}</label
        >
        <input :id="inputId" v-model="model" />
    </div>
</template>
