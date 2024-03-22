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
            <li lang="it">Le mura di Malapaga</li>
            <li lang="de">Le mura di Malapaga</li>
            <li>Le mura di Malapaga</li>
        </ul>
    </BaseSection>
</template>
