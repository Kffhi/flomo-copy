<template>
    <div class="theEditorWrap">
        <the-editor></the-editor>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
// import request from '@/utils/axios'

onMounted(() => {
    // console.log('编辑器加载')
})
</script>

<style lang="scss" scoped>
.theEditorWrap {
    width: 100%;
    padding: 10px 20px 10px;
}
</style>
