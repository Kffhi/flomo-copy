import { getCurrentInstance } from 'vue'
import { createEditorInstance } from './slate-plugin'

const onEditorChangeCallbacks: Array<undefined | Function> = []

export const useInstance = () => {
    return getCurrentInstance()
}

export const useEditor = () => {
    const currentInstance = useInstance()

    const findEditor = (instance: any): any => {
        if (instance?.$editor) {
            return instance.$editor
        }
        if (instance.type.name === 'Slate') {
            instance.$editor = createEditorInstance()
            const slateConfig = instance.root.__slateConfig
            if (slateConfig?.editorCreated) {
                slateConfig.editorCreated.call(instance.proxy, instance.$editor)
            }
            return instance.$editor
        }
        return findEditor(instance.parent)
    }
    return findEditor(currentInstance)
}

export const triggerUpdate = () => {
    onEditorChangeCallbacks.forEach(fn => fn && fn())
}
