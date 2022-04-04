import Quill from 'quill'

function initEditor(): Quill {
    const quill = new Quill('.editorContainer', {
        theme: 'snow',
        scrollingContainer: '.editor',
        modules: {
            toolbar: {
                container: '.editorToolbar'
            }
        }
    })
    return quill
}

export default {
    initEditor
}
