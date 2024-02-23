<script setup lang="ts">
const { tabName, currentTab, title } = defineProps<{
    tabName: string
    currentTab: string
    title: string
}>()
</script>

<template>
    <div :id="`${tabName}-tab`" role="tabpanel">
        <BaseSection
            :title="title"
            :class="
                cn('rounded-none rounded-b-2xl', {
                    hidden: tabName !== currentTab,
                })
            "
        >
            <slot></slot>
        </BaseSection>
    </div>
</template>
