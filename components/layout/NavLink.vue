<script setup lang="ts">
//border utility class needs to be defined as !important here
//because precedence can't otherwise be guaranteed
//due to quirks in the way tailwind utility class style sheets are included
const NavLink = defineNuxtLink({
    componentName: "NavLink",
    activeClass: "!border-emerald-200 !bg-emerald-200/5",
})

const { to } = defineProps<{ to: string }>()
</script>

<template>
    <li class="inline-block">
        <NavLink
            :to="to"
            class="rounded border-b-2 border-r border-emerald-200/0 px-4 transition-colors duration-300 hover:!bg-emerald-200/15"
            ><slot></slot
        ></NavLink>
    </li>
</template>
