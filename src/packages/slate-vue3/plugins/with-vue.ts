import { Editor } from 'slate'

export const withVue = <T extends Editor>(editor: T) => {
    const e = editor as T
    return e
}
