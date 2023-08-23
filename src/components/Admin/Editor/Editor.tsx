import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import parse from 'html-react-parser';

const Editor = () => {
    const [editor, setEditor] = useState("Hello from CKEditor&nbsp;5!")

    return <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onChange={(event, editor) => {
            const data = editor.getData();
            setEditor(data)
        }}
    />
}

export default Editor