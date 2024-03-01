<template>
    <header class="bg-emerald-950">
        <h1
            class="bg-gradient-to-bl from-emerald-400 from-20% to-emerald-950 px-1 pb-12 text-4xl font-bold"
        >
            Aria Playground.
        </h1>
        <nav class="p-2 px-8 text-lg text-emerald-200">
            <ul class="list-none space-x-8">
                <li class="inline-block">
                    <NuxtLink
                        class="nav-link"
                        active-class="nav-link-active"
                        href="/"
                        >/</NuxtLink
                    >
                </li>
                <li class="inline-block">
                    <NuxtLink
                        class="nav-link"
                        active-class="nav-link-active"
                        href="/forms"
                        >/forms</NuxtLink
                    >
                </li>
                <li class="inline-block">
                    <NuxtLink
                        class="nav-link"
                        active-class="nav-link-active"
                        href="/seating"
                        >/seating</NuxtLink
                    >
                </li>
                <li class="inline-block">
                    <NuxtLink
                        class="nav-link"
                        active-class="nav-link-active"
                        href="/tabs"
                        >/tabs</NuxtLink
                    >
                </li>
                <li class="inline-block">
                    <NuxtLink
                        class="nav-link"
                        active-class="nav-link-active"
                        href="#"
                        >3</NuxtLink
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.nav-link {
    @apply border-b-2 border-emerald-200/0 transition-colors duration-300;
}
.nav-link-active {
    border-color: rgb(167 243 208 / 1);
}
</style>
