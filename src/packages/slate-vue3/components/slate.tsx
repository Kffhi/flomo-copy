import { defineComponent, nextTick, reactive } from 'vue'
import { useEditor, triggerUpdate } from '../plugins'
import { EDITOR_TO_ON_CHANGE } from '../utils/weak-maps'

export const Slate = defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slate',
    props: {
        value: String
    },
    emits: ['onChange'],
    setup(props: any, ctx: any) {
        const editor = useEditor()

        const clearEditor = () => {
            editor.selection = null
        }

        const renderSlate = (newVal?: any) => {
            const _value = newVal || props.value
            editor.children = JSON.parse(_value)
            const $$data = JSON.parse(_value)
            editor._state = reactive($$data)

            clearEditor()
        }
        renderSlate()

        EDITOR_TO_ON_CHANGE.set(editor, async () => {
            await nextTick()
            triggerUpdate()

            // TODO: update selected and focused
            ctx.emit('onChange')
        })
    },
    render(this: any) {
        return this.$slots.default ? this.$slots.default() : <div>没有内容</div>
    }
})
