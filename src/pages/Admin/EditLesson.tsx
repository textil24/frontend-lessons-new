import { Container, Stack } from "@chakra-ui/react"
import { Editor, EditorAnswerSelector, EditorPrism, EditorTask } from "../../components/Admin"
import { Header } from "../../components/@Common"

const EditLesson = () => {
    return (
        <Container maxW='container.md'>
            <Stack spacing={4}>
                <Header type="home" />
                <Editor />
                <EditorAnswerSelector />
                <EditorTask />
                <EditorPrism />
            </Stack>
        </Container>
    )
}

export default EditLesson