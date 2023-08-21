import { Heading, Stack } from "@chakra-ui/react"

const EditorAnswerSelector = () => {
    return (
        <Stack pl={4} borderLeft={"2px solid #0088CC"} py={2} spacing={2} direction='column'>
            <Heading display={"flex"} alignItems={"center"} color={"red"} size='sm'>
                It's Question
            </Heading>
        </Stack>
    )
}

export default EditorAnswerSelector