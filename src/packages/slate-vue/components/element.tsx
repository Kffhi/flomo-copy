/**
 * interface Element {
 *  children: Node[]
 * }
 */
import { Editor, Node, Element as SlateElement } from 'slate'
// @ts-ignore
// TODO: direction
// import direction from 'direction'

import { PropType, defineComponent, h, inject, FunctionalComponent, withDirectives, resolveDirective, Directive } from 'vue'
import { NODE_TO_PARENT, NODE_TO_INDEX, KEY_TO_ELEMENT, NODE_TO_ELEMENT, ELEMENT_TO_NODE, RenderElementAttributes, RenderElementProps, VueEditor } from '../../slate-vue-shared'
import Text from './text'
import Children from './children'
import { elementWatcherPlugin, useEditor, useEffect, useRef } from '../plugins'

/**
 * The default element renderer.
 */

export const DefaultElement = (props: RenderElementProps) => {
    const { attributes, children, element } = props
    const editor = useEditor()
    const Tag = editor.isInline(element) ? 'span' : 'div'
    return (
        <Tag {...attributes} style={{ position: 'relative' }}>
            {children}
        </Tag>
    )
}

/**
 * Element
 */

const Element: any = defineComponent({
    props: {
        element: {
            type: Object as PropType<SlateElement>,
            required: true
        }
    },
    components: {
        Children
    },
    mounted() {
        elementWatcherPlugin(this, 'element')
    },
    setup(props) {
        const ref = useRef(null)
        // eslint-disable-next-line vue/no-setup-props-destructure
        const { element } = props
        const editor = useEditor()
        const key = VueEditor.findKey(editor, element)
        const renderElement: FunctionalComponent<any> = inject('renderElement') || DefaultElement
        const readOnly = inject('readOnly')

        useEffect(() => {
            if (ref.current) {
                KEY_TO_ELEMENT.set(key, ref.current)
                NODE_TO_ELEMENT.set(element, ref.current)
                ELEMENT_TO_NODE.set(ref.current, element)
            } else {
                KEY_TO_ELEMENT.delete(key)
                NODE_TO_ELEMENT.delete(element)
            }
        })

        return {
            ref,
            renderElement,
            readOnly
        }
    },
    render() {
        // call renderElement with children, attribute and element
        const { element, renderElement, ref } = this
        const editor = useEditor()
        const isInline = editor.isInline(element)
        let children: any = <Children node={element} />
        const attributes: RenderElementAttributes = {
            'data-slate-node': 'element'
        }
        if (isInline) {
            attributes['data-slate-inline'] = true
        }

        // If it's a block node with inline children, add the proper `dir` attribute
        // for text direction.
        if (!isInline && Editor.hasInlines(editor, element)) {
            const text = Node.string(element)
            // TODO: direction
            // const dir = direction(text)
            const dir = text

            if (dir === 'rtl') {
                attributes.dir = dir
            }
        }

        // If it's a void node, wrap the children in extra void-specific elements.
        if (Editor.isVoid(editor, element)) {
            attributes['data-slate-void'] = true

            if (!this.readOnly && isInline) {
                attributes.contentEditable = false
            }

            const Tag = isInline ? 'span' : 'div'
            const [[text]] = Node.texts(element)

            children = this.readOnly ? null : (
                <Tag
                    data-slate-spacer
                    style={{
                        height: '0',
                        color: 'transparent',
                        outline: 'none',
                        position: 'absolute'
                    }}
                >
                    <Text decorations={[]} isLast={false} parent={element} text={text} />
                </Tag>
            )

            NODE_TO_INDEX.set(text, 0)
            NODE_TO_PARENT.set(text, element)
        }

        const refDir = resolveDirective('ref')

        return withDirectives(
            h(
                renderElement(
                    {
                        element,
                        attributes,
                        children
                    },
                    this as any
                )
            ),
            [[refDir as Directive, ref]]
        )
    }
})

export default Element
