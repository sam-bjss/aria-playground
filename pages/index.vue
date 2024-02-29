<script setup lang="ts">
const changedAnnouncement = ref<Boolean>(false)
const announcementText = ref<string>("Default announcement text")
const listOfThings = ref<string[]>([])
const mysteriousCheckbox = ref(false)

const announcementTitle = computed(() => {
    return changedAnnouncement.value ? "Message title one" : "Message title 2"
})

watch(changedAnnouncement, (value) => {
    announcementText.value = value
        ? "This message is announced."
        : "The message has been changed."
})

watch(mysteriousCheckbox, (value) => {
    announcementText.value = `mysteriousCheckbox value is ${value}`
})

function addThing() {
    const newThing = `Thing number ${listOfThings.value.length}`
    announcementText.value = `Added ${newThing}`
    listOfThings.value.push(newThing)
}

function removeThing() {
    const removedThing = listOfThings.value.splice(0, 1)
    announcementText.value = `Removed ${removedThing[0]}`
}

function toggleAnnouncement() {
    console.log("toggle announcement")

    changedAnnouncement.value = !changedAnnouncement.value
}
</script>

<template>
    <main class="space-y-8">
        <BaseSection id="hello-section" title="Hi There">
            <p>This is some text</p>
            <BaseButton
                aria-controls="aria-live-area"
                @click="toggleAnnouncement"
            >
                Toggle Announcement
            </BaseButton>
        </BaseSection>

        <BaseSection id="next-section" title="Another Heading">
            <p>This is some text for the second section of the page</p>
            <div class="space-x-2">
                <BaseButton @click="addThing">Add a Thing</BaseButton>
                <BaseButton @click="removeThing">Remove a Thing</BaseButton>
            </div>
        </BaseSection>

        <BaseSection id="checkbox-section">
            <BaseCheckbox
                v-model="mysteriousCheckbox"
                label="Mysterious Checkbox; this is fine, just click it!"
                hidden-label
                name="checkbox-with-hidden-message"
            />
        </BaseSection>

        <AriaLiveArea
            :announcement-title="announcementTitle"
            :announcement-text="announcementText"
            :list-of-things="listOfThings"
        />
    </main>
</template>
