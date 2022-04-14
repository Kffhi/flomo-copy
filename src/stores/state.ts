import { defineStore } from 'pinia'
import { USERINFO_TYPE, dayMapType } from '@/types/state'
import { MyResponseType } from '@/types/request'
import request from '@/utils/axios'

interface stateType {
    userInfo: USERINFO_TYPE
    heatMap: dayMapType
}

export const useStateStore = defineStore('stateStore', {
    state: (): stateType => {
        return {
            userInfo: {
                userName: '',
                duration: 0,
                tagNumber: 0,
                memoNumber: 0
            },
            heatMap: new Map()
        }
    },
    actions: {
        async getUserinfo() {
            const res: MyResponseType<USERINFO_TYPE> = await request.get<USERINFO_TYPE>('/state/userInfo')
            this.userInfo = res.data
        },
        async getHeatMap() {
            const res: MyResponseType<any[]> = await request.get<any[]>('/state/heatMap')
            this.heatMap = new Map(res.data)
        }
    }
})
