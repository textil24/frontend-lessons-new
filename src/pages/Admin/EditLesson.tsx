import { Button, Container, Stack } from "@chakra-ui/react"
import { Editor, EditorAnswerSelector, EditorPrism, EditorTask } from "../../components/Admin"
import { Header } from "../../components/@Common"
import { useForm } from "react-hook-form"

export interface IEditLesson {
    content: [
        {
            title: string;
            text: string;
        },
        {
            question: string
        }
    ];
}

const EditLesson = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IEditLesson>();

    const onSubmit = (data: any) => {
        console.log(data)
        if (data.title) {
            console.log(data)
        }
    };

    return (
        <Container maxW='container.md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <Header type="home" />

                    {/* <EditorAnswerSelector /> */}

                    <Editor />

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

                {/* <EditorPrism /> */}
                </Stack>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default EditLesson