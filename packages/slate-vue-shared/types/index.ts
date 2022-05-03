import { Editor, Element, Node, Operation, Text } from 'slate'

interface o {
    [key: string]: any
}

interface PickObservableObject {
    __ob__: any
}

type Observable<T> = T extends o ? T & PickObservableObject : T

export type FlatObservableArray<T> = T extends (infer U)[] ? Observable<U> : T

export interface RenderLeafProps {
    children: any
    leaf: Text
    text: Text | undefined
    attributes: {
        'data-slate-leaf': true
    }
}

export interface RenderElementAttributes {
    'data-slate-node': 'element'
    'data-slate-void'?: true
    'data-slate-inline'?: true
    contentEditable?: false
    dir?: 'rtl'
}

export interface RenderElementProps {
    children: any
    element: Element
    attributes: RenderElementAttributes
}

/**
 * A React and DOM-specific version of the `Editor` interface.
 */

export interface VueEditorType extends Editor {
    insertData(data: DataTransfer): void

    setFragmentData(data: DataTransfer): void

    _operation?: Operation
    _state: FlatObservableArray<Array<Node>>

    clear(): void
}
