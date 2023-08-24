import { Button, Container, Stack } from "@chakra-ui/react"
import { Editor, EditorAnswerSelector, EditorPrism, EditorTask } from "../../components/Admin"
import { Header } from "../../components/@Common"
import { useForm } from "react-hook-form"

export interface IEditLesson {
    content: [
        {
            id: number
            title: string
            text: string
        }
    ]
}

const EditLesson = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IEditLesson>();

    const onSubmit = (data: any) => {
        if (data.title) {
            console.log(data)
        }
    };

    return (
        <Container maxW='container.md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <Header type="home" />
                    <EditorTask
                        index={0}
                        register={register}
                        errors={errors}
                        maxLength={100}
                    />
                    <EditorTask
                        index={1}
                        register={register}
                        errors={errors}
                        maxLength={100}
                    />

                    {/* <Editor />
                <EditorAnswerSelector />
                <EditorPrism /> */}
                </Stack>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default EditLesson