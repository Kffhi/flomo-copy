import { getCurrentInstance } from 'vue'
import { createEditor } from 'slate'
import { withVue } from '../../slate-vue-shared'

const onEditorChangeCallbacks: Array<undefined | Function> = []

export const createEditorInstance = () => {
    const editor = withVue(createEditor() as any)
    return editor
}

export const useInstance = (): any => {
    return getCurrentInstance()
}

/**
 * $editor only in slate component
 * get editor from current instance
 */
export const useEditor = () => {
    const currentInstance = useInstance()
    const findEditor = (instance: any): any => {
        if (instance.$editor) {
            return instance.$editor
        }
        if (instance.type?.name === 'Slate') {
            // create editor in Slate component
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

export const useSlate = () => {
    const instance = useInstance()
    // update will be triggered both reactivity and manual
    //
    onEditorChangeCallbacks.push(() => {
        instance.update()
    })
}

export const triggerUpdate = () => {
    onEditorChangeCallbacks.forEach(fn => fn && fn())
}
