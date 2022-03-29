import { defineStore } from "pinia"

export const useStore = defineStore("globalStore", {
    state: () => {
        return { count: 0 }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
