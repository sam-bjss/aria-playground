<script setup lang="ts">
//border utility class needs to be defined as !important here
//because precedence can't otherwise be guaranteed
//due to quirks in the way tailwind utility class style sheets are included
const NavLink = defineNuxtLink({
    componentName: "NavLink",
    activeClass: "!border-emerald-200",
})

const { to } = defineProps<{ to: string }>()
</script>

<template>
    <li class="inline-block">
        <NavLink
            :to="to"
            class="border-b-2 border-emerald-200/0 transition-colors duration-300"
            ><slot></slot
        ></NavLink>
    </li>
</template>
