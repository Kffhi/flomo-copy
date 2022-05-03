import { defineComponent, PropType, inject, h } from 'vue'
import { Text } from 'slate'
import { PLACEHOLDER_SYMBOL, RenderLeafProps } from '../../slate-vue-shared'
import string from './string'

/**
 * The default custom leaf renderer.
 */

const DefaultLeaf = (props: RenderLeafProps) => {
    return defineComponent({
        render() {
            const { attributes, children } = props
            return <span {...attributes}>{children}</span>
        }
    })
}

/**
 * Individual leaves in a text node with unique formatting.
 */

const Leaf = defineComponent({
    props: {
        text: {
            type: Object as PropType<Text>
        },
        leaf: {
            type: Object as PropType<Text>,
            required: true
        }
    },
    components: {
        string
    },
    setup() {
        const renderLeaf = inject('renderLeaf', DefaultLeaf) || DefaultLeaf
        return {
            renderLeaf
        }
    },
    render() {
        const { renderLeaf, text, leaf } = this
        let children = <string leaf={leaf} />
        if ((leaf as any)[PLACEHOLDER_SYMBOL]) {
            children = (
                <>
                    <span
                        contenteditable={false}
                        style={{
                            pointerEvents: 'none',
                            display: 'inline-block',
                            verticalAlign: 'text-top',
                            width: '0',
                            maxWidth: '100%',
                            whiteSpace: 'nowrap',
                            opacity: '0.333'
                        }}
                    >
                        {(leaf as any).placeholder}
                    </span>
                    {children}
                </>
            )
        }

        const attributes: {
            'data-slate-leaf': true
        } = {
            'data-slate-leaf': true
        }
        const renderChildren = renderLeaf({
            children,
            attributes,
            leaf,
            text
        })
        return h(renderChildren)
    }
})

export default Leaf
