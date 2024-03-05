<script setup lang="ts">
const NavLink = defineNuxtLink({
    componentName: "NavLink",
    activeClass: "border-emerald-200",
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

<style scoped>
.nav-link-active {
    border-color: rgb(167 243 208 / 1);
}
</style>
