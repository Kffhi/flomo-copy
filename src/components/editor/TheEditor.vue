<template>
    <div class="theEditor">
        <div class="editorContainer">
            <Slate :value="textValue"></Slate>
        </div>
        <div class="editorToolbar"></div>
        <div class="editorSubmitBtn"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slate } from '@/packages/slate-vue3'

const initialValue = JSON.stringify([
    {
        children: [{ text: 'This is editable plain text, just like a <textarea>!' }]
    }
])

const textValue = ref(initialValue)
</script>

<style lang="scss" scoped>
.theEditor {
    width: 100%;
    height: 100%;
    border: 1px solid $editor-border-color;
    border-radius: 8px;
    position: relative;
    background: $editor-bg-color;
    @include flex();
    flex-wrap: wrap;
    position: relative;

    .editorContainer {
        width: 100%;
        min-height: 90px;
        height: auto;
    }

    .editorToolbar {
        height: 30px;
        width: 100%;

        .tagBtn {
            color: $editor-tag-color;
        }
    }

    .editorSubmitBtn {
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: $main-color;
        border-color: $main-color;
    }
}
</style>
