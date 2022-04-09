<template>
    <div class="tags-tree">
        <h3>全部标签</h3>
        <div class="treeWrap">
            <el-tree :data="tags" :props="defaultProps" @node-click="handleNodeClick" />
        </div>
        <div>{{ currTag.value }}</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/tags'
import { TagsNode } from '@/types/tags'

const tagsStore = useStore()

const { tags, currTag } = storeToRefs(tagsStore)
const defaultProps = {
    children: 'children',
    label: 'value'
}

onMounted(async () => {
    await tagsStore.getTagsTree()
    console.log('tags', tags.value)
})

const handleNodeClick = (node: TagsNode) => {
    tagsStore.setCurrTag(node)
}
</script>

<style lang="scss" scoped>
.tags-tree {
    width: 100%;

    h3 {
        font-size: 12px;
        color: $text-gold-color;
        padding-left: 16px;
        margin: 20px 0 0;
    }

    .tags {
        margin: 8px 0 18px;
    }
}
</style>
