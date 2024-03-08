<script setup lang="ts">
const { menuItems } = defineProps<{
    menuItems: string[]
    title: string
}>()

const expanded = ref(false)
const thisMenuRef = ref<any>()

function toggleExpand() {
    expanded.value = !expanded.value
}

let menuFadeTimer: NodeJS.Timeout

function handleMouseEnter() {
    clearTimeout(menuFadeTimer)
    expanded.value = true
}

function handleMouseLeave() {
    if (!thisMenuRef.value?.contains(document.activeElement)) {
        menuFadeTimer = setTimeout(() => (expanded.value = false), 500)
    }
}

function handleFocusMove(event: FocusEvent) {
    const relatedTarget: any = event.relatedTarget
    if (!thisMenuRef.value?.contains(relatedTarget)) {
        expanded.value = false
    }
}
</script>

<template>
    <li
        ref="thisMenuRef"
        class="inline-block"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @focusout="handleFocusMove"
    >
        <div
            :class="
                cn(
                    'rounded px-2 font-semibold transition-all duration-300 hover:bg-emerald-950/15',
                    { 'bg-emerald-950/10': expanded },
                )
            "
            :aria-expanded="expanded"
        >
            <a href="#">{{ title }}</a>
            <button
                v-if="menuItems"
                :aria-expanded="expanded"
                :aria-label="`Expand ${title} menu`"
                :class="
                    cn(
                        'inline-block -rotate-90 scale-x-50 rounded text-center text-base font-bold outline-none ring-emerald-400 transition-all duration-100 focus:ring-2',
                        {
                            'rotate-90': expanded,
                        },
                    )
                "
                @click="toggleExpand"
            >
                &lt;
            </button>
        </div>
        <Transition
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            enter-active-class="duration-300"
            leave-active-class="duration-300"
            mode="out-in"
        >
            <ul
                v-if="expanded && menuItems"
                class="absolute space-y-2 bg-gradient-to-b from-emerald-300 to-emerald-50 p-2 text-sm"
            >
                <MenuItem v-for="item in menuItems" :key="item"
                    ><a href="#">
                        {{ item }}
                    </a></MenuItem
                >
            </ul>
        </Transition>
    </li>
</template>
