import { Editor } from 'slate'

/**
 * Weak map for associating the context `onChange` context with the plugin.
 */
export const EDITOR_TO_ON_CHANGE = new WeakMap<Editor, () => void>()
