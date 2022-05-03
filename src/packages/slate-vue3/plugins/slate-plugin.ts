import { createEditor } from 'slate'
import { withVue } from './with-vue'
import { vRef } from './vue-hooks'

export const createEditorInstance = () => {
    const editor = withVue(createEditor() as any)
    return editor
}

export const SlatePlugin = {
    install(app: any, options?: any) {
        app.mixin({
            beforeCreate() {
                const instance = this.$
                if (instance.parent === null) {
                    instance.__slateConfig = options
                }
            }
        })
        app.directive('ref', vRef)
    }
}
