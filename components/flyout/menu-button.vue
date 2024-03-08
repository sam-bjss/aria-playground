<template>
    <li class="inline-block">
        <button>
            <slot></slot>
            <div
                class="inline-block -rotate-90 p-1 scale-x-50 font-bold text-lg transition-all duration-300"
            >
                &gt;
            </div>
        </button>
    </li>
</template>
