<script setup lang="ts">
import { reactive } from "vue"

const data = reactive({
    input1: "",
    input2: "",
})
</script>

<template>
    <BaseSection>
        <form class="space-y-8 rounded-xl bg-emerald-500/20 p-4">
            <div class="space-x-2">
                <label
                    for="input-1"
                    class="text-sm font-semibold uppercase text-emerald-800"
                    >Input 1 - labelled with "for=" tag</label
                >
                <input
                    id="input-1"
                    v-model="data.input1"
                    :class="`rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                />
            </div>
            <div class="block">
                <span
                    tabindex="0"
                    :class="`rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                    >Tabbable span content without label</span
                >
            </div>
            <div class="block space-x-2">
                <div
                    tabindex="0"
                    aria-labelledby="label-3"
                    :class="`inline-block size-8 rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                ></div>
                <span id="label-3">Label for second tabbable span</span>
            </div>
            <div class="block space-x-2">
                <div
                    tabindex="0"
                    aria-label="This is the aria label for the third tabbable span"
                    :class="`inline-block size-8 rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                ></div>
                <span>Third tabbable span using aria-label</span>
            </div>
            <div class="block space-x-2">
                <div
                    tabindex="0"
                    aria-label="Label for fourth tabbable span"
                    aria-labelledby="label-4"
                    :class="`inline-block size-8 rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                ></div>
                <span id="label-4"
                    >aria-labelledby takes precedence over aria-label</span
                >
            </div>
            <div class="block space-x-2">
                <span
                    tabindex="0"
                    aria-label="Label for fifth tabbable span"
                    aria-labelledby="label-5"
                    :class="`inline-block rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                    >Content takes precedence in NVDA over aria-label and
                    aria-labelledby</span
                >
                <span id="label-5"
                    >aria-labelledby label for fifth tabbable span</span
                >
            </div>
            <div class="block space-x-2">
                <div
                    tabindex="0"
                    aria-labelledby="label-6"
                    :class="`inline-block size-8 rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                ></div>
                <span
                    id="label-6"
                    class="rounded-lg border border-emerald-800 p-1"
                    >Label for sixth tabbable span</span
                >
                <span
                    id="label-6"
                    class="mt-4 block rounded-lg border border-emerald-800 p-1"
                    >Note that in NVDA only the first referenced label will be
                    read</span
                >
            </div>
            <div class="space-x-2">
                <label
                    for="input-7"
                    class="text-sm font-semibold uppercase text-emerald-800"
                    >Input 7 - first label for for="" tag</label
                >
                <label
                    for="input-7"
                    class="mt-4 block text-sm font-semibold uppercase text-emerald-800"
                    >Subsequent label for Input 7 - both labels are read in NVDA</label
                >
                <input
                    id="input-7"
                    v-model="data.input1"
                    :class="`rounded border-2 border-emerald-900 bg-white/90 px-2 py-1 caret-emerald-900
                            ring-4 ring-emerald-500/0 transition-all duration-150 focus:ring-emerald-500`"
                />
            </div>
        </form>
    </BaseSection>
</template>
