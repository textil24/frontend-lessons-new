import { Select, Stack } from '@chakra-ui/react'
import { Monaco } from '../Lesson'

const EditorPrism = () => {
    return (
        <Stack pl={4} borderLeft={"2px solid #0088CC"} py={2} spacing={2} direction='column'>
            <Select placeholder='Выбрать язык программирования'>
                <option value='option1'>JavaScript</option>
                <option value='option2'>Typescript</option>
                <option value='option3'>GraphQL</option>
            </Select>
            <Monaco code={["console.log('Hello world')"]} />
        </Stack>
    )
}

export default EditorPrism