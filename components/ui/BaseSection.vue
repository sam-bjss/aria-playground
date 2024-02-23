<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
    <section
        :class="
            cn('w-1/2 rounded-2xl border-2 border-gray-500 p-2', $attrs.class)
        "
    >
        <BaseH2 v-if="title">{{ title }}</BaseH2>
        <slot></slot>
    </section>
</template>
