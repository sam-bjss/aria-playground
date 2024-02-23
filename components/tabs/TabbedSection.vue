<script setup>
const currentTab = ref("nvda")

function selectTab(tab) {
    currentTab.value = tab
}

watch(currentTab, () => {
    // console.log("currentTab is ", currentTab.value)
})
</script>

<template>
    <div>
        <ul class="" role="tablist">
            <TabButton
                tab-name="aria"
                :current-tab="currentTab"
                @select-tab="selectTab"
                >ARIA</TabButton
            >
            <TabButton
                tab-name="nvda"
                :current-tab="currentTab"
                @select-tab="selectTab"
                >NVDA</TabButton
            >
        </ul>
        <TabPanel tab-name="aria" :current-tab="currentTab" title="Aria Page"
            >This is the Aria page</TabPanel
        >
        <TabPanel tab-name="nvda" :current-tab="currentTab" title="NVDA Page"
            >This is the NVDA page</TabPanel
        >
    </div>
</template>
