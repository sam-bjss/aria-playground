<script setup lang="ts">
function setLang(val: string) {
    document!.documentElement.lang = val
    console.log("setting language to ", val)
}
</script>
<template>
    <BaseSection title="Language Switcher" class="space-x-4">
        <BaseButton @click="setLang('en')"> English </BaseButton>
        <BaseButton lang="fr" @click="setLang('fr')"> Français </BaseButton>
        <BaseButton @click="setLang('de')"> Deutsch </BaseButton>
        <ul>
            <li lang="it">
                Le mura di Malapaga
                <span class="px-5 text-sm italic" aria-hidden>lang="it"</span>
            </li>
            <li lang="de">
                Le mura di Malapaga
                <span class="px-5 text-sm italic" aria-hidden>lang="de"</span>
            </li>
            <li>
                Le mura di Malapaga
                <span class="px-5 text-sm italic" aria-hidden
                    >lang default</span
                >
            </li>
        </ul>

        <p class="py-4">
            The Italian for "good morning" is
            <span class="italic" lang="it">Buongiorno</span>
        </p>

        <div class="text-gray-600">
            <h3 class="border-b border-emerald-900 text-lg font-semibold">
                Installing a New Speech Language Pack
            </h3>
            <ul class="list-disc px-8">
                <li>Go to Start and open Settings</li>
                <li>Select Time & language > Language</li>
                <li>
                    Select the language you want to add speech to, and then
                    select the Next button
                </li>
                <li>Click 'Add a Language'</li>
                <li>
                    Select the speech options you want included with the
                    language
                </li>
            </ul>
        </div>
    </BaseSection>
</template>
