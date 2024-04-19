<script setup lang="ts"></script>

<template>
    <BaseSection title="Restyled Radio Button">
        <label class="inline-block font-semibold">
            <span>1</span>
            <input
                class="restyled-radio transition-all"
                type="radio"
                checked="checked"
                name="my-radio"
            />
        </label>
        <label class="inline-block font-semibold">
            <span>2</span>
            <input class="restyled-radio" type="radio" name="my-radio" />
        </label>
        <label class="inline-block font-semibold">
            <span>3</span>
            <input class="restyled-radio" type="radio" name="my-radio" />
        </label>
    </BaseSection>
</template>
