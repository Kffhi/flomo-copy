<template>
    <div class="theEditor">
        <div class="editor">
            <div class="editorContainer"></div>
            <div class="editorToolbar">
                <el-button class="tagBtn" type="text">#</el-button>
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
                <button class="ql-list" value="ordered" type="button"></button>
                <button class="ql-list" value="bullet" type="button"></button>
                <button class="ql-image" type="button"></button>
            </div>
            <el-button class="editorSubmitBtn" type="success" @click="handleSubmit">发送</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Delta from 'quill'
import editor from '@/utils/editor'

let Quill: any

onMounted(() => {
    Quill = editor.initEditor()
})

const handleSubmit = () => {
    const content: Delta = Quill.getContents()
    console.log(content)
}
</script>

<style lang="scss" scoped>
.theEditor {
    width: 100%;
    padding: 10px 20px 10px;

    .editor {
        width: 100%;
        height: 100%;
        border: 2px solid #e8e8e8;
        border-radius: 8px;
        position: relative;
        background: #fff;
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
                color: $text-tag-color;
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
}
</style>
