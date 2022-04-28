<template>
    <div class="theEditor"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import request from '@/utils/axios'

let Quill: any

onMounted(() => {
    console.log('编辑器加载')
})
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
