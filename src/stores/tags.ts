import { defineStore } from 'pinia'
import request from '@/utils/axios'
import { TagsNode, TagsTreeType } from '@/types/tags'
import { MyResponseType } from '@/types/request'

interface stateType {
    tags: TagsTreeType
    currTag: TagsNode
}

export const useStore = defineStore('tagsStore', {
    state: (): stateType => {
        return {
            tags: [],
            currTag: {}
        }
    },
    actions: {
        async getTagsTree() {
            const res: MyResponseType<TagsTreeType> = await request.get<TagsTreeType>('/tag/getAll')
            this.tags = res.data
        },
        // 设置当前选中的tag
        setCurrTag(tag: TagsNode) {
            this.currTag = tag
        }
    }
})
