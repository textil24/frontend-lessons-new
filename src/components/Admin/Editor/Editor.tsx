import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { SelectionWrapper } from '..';
import { useForm } from 'react-hook-form';

const Editor = () => {
    const [editor, setEditor] = useState("Hello from CKEditor&nbsp;5!")

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{ editor: string }>()

    const onSubmit = (data: any) => {
        console.log(data)
        if (data.title) {
            console.log(data)
        }
    };

    return (
        <SelectionWrapper name='Текстовый редактор'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CKEditor
                    editor={ClassicEditor}
                    // data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setEditor(data)
                    }}
                />
            </form>
        </SelectionWrapper>
    )
}

export default Editor