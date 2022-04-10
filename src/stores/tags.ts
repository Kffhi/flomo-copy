import { defineStore } from 'pinia'
import request from '@/utils/axios'
import { TagsTreeType, currTag } from '@/types/tags'
import { MyResponseType } from '@/types/request'

interface stateType {
    tags: TagsTreeType
    currTag: currTag
}

export const useTagStore = defineStore('tagsStore', {
    state: (): stateType => {
        return {
            tags: [],
            currTag: null
        }
    },
    actions: {
        async getTagsTree() {
            const res: MyResponseType<TagsTreeType> = await request.get<TagsTreeType>('/tag/getAll')
            this.tags = res.data
        },
        // 设置当前选中的tag
        setCurrTag(tag: currTag) {
            this.currTag = tag
        }
    }
})
