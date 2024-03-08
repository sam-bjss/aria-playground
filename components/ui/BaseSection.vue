<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
    <section
        :class="
            cn(
                'w-full rounded-2xl border-2 border-gray-500 p-2 md:w-3/4 lg:w-1/2',
                $attrs.class,
            )
        "
    >
        <BaseH2 v-if="title">{{ title }}</BaseH2>
        <slot></slot>
    </section>
</template>
