import { Select, Stack } from '@chakra-ui/react'
import { Monaco } from '../Lesson'
import { SelectionWrapper } from '.'

const EditorPrism = () => {

    const categories = [
        {
            value: "javascript",
            name: "JavaScript"
        },
        {
            value: "typescript",
            name: "TypeScript"
        },
        {
            value: "graphql",
            name: "GraphQL"
        }
    ]

    return (
        <SelectionWrapper name={"Код для ознакомления"}>
            <Stack pl={4} borderLeft={"2px solid #0088CC"} py={2} spacing={2} direction='column'>
                <Select placeholder='Выбрать язык программирования'>
                    {categories.map(({ value, name }) =>
                        <option value={value}>{name}</option>
                    )}
                </Select>
                <Monaco code={["console.log('Hello world')"]} />
            </Stack>
        </SelectionWrapper>
    )
}

export default EditorPrism