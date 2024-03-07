<template>
    <header class="bg-emerald-950">
        <h1
            class="bg-gradient-to-bl from-emerald-400 from-20% to-emerald-950 px-1 pb-12 text-4xl font-bold"
        >
            Aria Playground.
        </h1>
        <nav class="p-2 px-8 text-lg text-emerald-200">
            <ul class="list-none space-x-8">
                <NavLink to="/">/</NavLink>
                <NavLink to="/forms">/forms</NavLink>
                <NavLink to="/seating">/seating</NavLink>
                <NavLink to="/tabs">/tabs</NavLink>
                <NavLink to="/svg">/svg</NavLink>
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
