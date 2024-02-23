<script setup lang="ts">
const { tabName, currentTab } = defineProps<{
    tabName: string
    currentTab: string
}>()

const emit = defineEmits<{
    selectTab: [tabName: string]
}>()
</script>

<template>
    <li class="inline-block">
        <button
            :id="`${tabName}-button`"
            :class="
                cn(
                    'rounded-t-xl border-2 border-gray-500 bg-emerald-400 px-4 py-2 font-semibold',
                    {
                        'bg-gradient-to-tr from-emerald-400 to-white':
                            tabName === currentTab,
                    },
                )
            "
            role="tab"
            :aria-controls="`${tabName}-tab`"
            :aria-selected="tabName === currentTab"
            @click="emit('selectTab', tabName)"
        >
            <slot></slot>
            {{ tabName === currentTab ? " BLARH" : "" }}
        </button>
    </li>
</template>
