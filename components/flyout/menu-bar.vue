<script setup lang="ts">
const menus = [
    { title: "Menu 1" },
    { title: "Menu 2", items: ["Item 1", "item 2", "etc"] },
    { title: "Menu 3" },
    { title: "Menu 4", items: ["Item 1", "item 2", "etc"] },
]

const menuList = reactive(menus)
</script>

<template>
    <div
        class="w-max rounded-lg bg-gradient-to-b from-emerald-100 to-emerald-300 p-2 px-4"
    >
        <ul class="space-x-4">
            <MenuButton
                v-for="menu in menuList"
                :key="`${menu.title}|${menu.index}`"
                :menu-items="menu.items"
                :title="menu.title"
            />
        </ul>
    </div>
</template>
