import { defineStore } from 'pinia'
import { ACTIVE_MENU } from '@/utils/constants'
import { ACTIVE_MENU_TYPE } from '@/types'

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return { activeMenu: ACTIVE_MENU.MEMO }
    },
    actions: {
        setActiveMenu(id: ACTIVE_MENU_TYPE) {
            this.activeMenu = id
        }
    }
})
