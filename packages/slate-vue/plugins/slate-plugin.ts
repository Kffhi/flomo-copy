// import { createEditor, Operation } from 'slate'
import { Operation } from 'slate'
import { vRef } from './vue-hooks'
import { useEditor } from './slate-hooks'

// for element and element[]
export const elementWatcherPlugin = (instance: any, type: string) => {
    const { update } = instance
    const editor = useEditor()

    instance.update = () => {
        const op: Operation = editor._operation
        // some op doesn't change element, so prevent updating
        if (op) {
            if (op.type === 'remove_text' || op.type === 'insert_text' || op.type === 'set_selection') {
                return
            }
            if (op.type === 'remove_node' && type === 'element') {
                return
            }
        }
        update.call(instance)
    }
}

export const SlatePlugin = {
    install(app: any, options?: any) {
        app.mixin({
            beforeCreate() {
                // add __slateConfig on root
                const instance = this.$
                if (instance.parent === null) {
                    instance.__slateConfig = options
                }
            }
        })
        app.directive('ref', vRef)
    }
}
