<template>
    <div class="tags-tree">
        <h3>全部标签</h3>
        <div class="treeWrap">
            <el-tree ref="treeRef" node-key="id" :data="tags" :props="defaultProps" highlight-current @node-click="handleNodeClick">
                <template #default="{ node, data }">
                    <span class="tagsNode">
                        <div class="nodeLeft">
                            <span class="tagIcon">{{ data.icon }}</span>
                            <span>{{ node.label }}</span>
                        </div>
                        <div class="nodeRight">
                            <el-dropdown>
                                <el-icon :size="18" color="#9d9d9d">
                                    <more-filled />
                                </el-icon>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>重命名</el-dropdown-item>
                                        <el-dropdown-item>更改图标</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </span>
                </template>
            </el-tree>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue'
import { onMounted, watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElTree } from 'element-plus'
import { useTagStore } from '@/stores/tags'
import { useGlobalStore } from '@/stores'
import { TagsNode } from '@/types/tags'

type EleForm = InstanceType<typeof ElTree>

const tagsStore = useTagStore()
const globalStore = useGlobalStore()

const { tags, currTag } = storeToRefs(tagsStore)
const defaultProps = {
    children: 'children',
    label: 'value'
}
const treeRef = ref(null as EleForm | null)

onMounted(async () => {
    await tagsStore.getTagsTree()
    console.log('tags', tags.value)
})

watch(
    () => tagsStore.currTag,
    () => {
        console.log('currTag', currTag.value)
        if (!currTag.value) {
            treeRef.value?.setCurrentKey(null)
        }
    }
)

const handleNodeClick = (node: TagsNode) => {
    tagsStore.setCurrTag(node)
    globalStore.setActiveMenu('') // 清除当前的菜单
    // TODO: Memos需要更新
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

    .treeWrap {
        width: 100%;
        margin: 8px 0 18px;

        ::v-deep .el-tree {
            background-color: $background-main-color;
        }

        ::v-deep .el-tree-node__content {
            width: 100%;
            height: 36px;
            @include flex();
            font-size: 16px;
            cursor: pointer;
            color: $text-main-color;

            &:hover {
                background-color: $background-hover-color;
                border-radius: 5px;

                & .nodeRight .el-icon {
                    display: inline;
                }
            }

            & > .el-icon {
                display: none;
            }
        }

        ::v-deep .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
            background-color: $main-color;
            border-radius: 5px;

            & .nodeRight .el-icon {
                display: inline;
            }
        }

        .tagsNode {
            padding: 0 10px 0 17px;
            @include flex(space-between);
            width: 100%;
            height: 100%;

            .tagIcon {
                margin-right: 10px;
            }

            .nodeRight {
                width: 18px;
                height: 100%;
                @include flex(center);

                .el-icon {
                    display: none;
                }
            }
        }
    }
}
</style>
