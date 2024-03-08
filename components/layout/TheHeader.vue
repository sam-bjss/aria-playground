<template>
    <header class="bg-emerald-950">
        <h1
            class="bg-gradient-to-br from-emerald-400 from-40% to-emerald-950 px-1 pb-12 text-4xl font-bold sm:from-20%"
        >
            Aria Playground.
        </h1>
        <div class="">
            <nav
                class="flex w-full gap-8 p-2 px-8 text-lg text-emerald-200"
                aria-labelledby="navigation-heading"
            >
                <h2
                    id="navigation-heading"
                    class="inline-block border-r-2 border-emerald-200/75 pr-4 italic"
                >
                    On this page:
                </h2>
                <TopNavList />
            </nav>
        </div>
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
