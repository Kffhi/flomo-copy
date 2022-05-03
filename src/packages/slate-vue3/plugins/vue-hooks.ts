import { ObjectDirective } from 'vue'

const handleRef = (el: HTMLElement | null, ref: any) => {
    if (typeof ref === 'function') {
        ref(el)
    } else {
        ref.current = el
    }
}

/**
 * v-ref directive same as ref in react
 */
export const vRef: ObjectDirective<HTMLElement> = {
    mounted(el, binding) {
        handleRef(el, binding.value)
    },
    updated(el, binding) {
        handleRef(el, binding.value)
    },
    unmounted(el, binding) {
        handleRef(null, binding.value)
    }
}
