import { defineStore } from 'pinia'
import { USERINFO_TYPE } from '@/types/state'
import { MyResponseType } from '@/types/request'
import request from '@/utils/axios'

interface stateType {
    userInfo: USERINFO_TYPE
}

export const useStateStore = defineStore('stateStore', {
    state: (): stateType => {
        return {
            userInfo: {
                userName: '',
                duration: 0,
                tagNumber: 0,
                memoNumber: 0
            }
        }
    },
    actions: {
        async getUserinfo() {
            const res: MyResponseType<USERINFO_TYPE> = await request.get<USERINFO_TYPE>('/state/userinfo')
            this.userInfo = res.data
        }
    }
})
