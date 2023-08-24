import { QuestionOutlineIcon } from "@chakra-ui/icons"
import { Button, Checkbox, CloseButton, Flex, Input, Stack } from "@chakra-ui/react"
import { SelectionWrapper } from "."
import { FC } from "react"

interface IEditorAnswerSelector {
    question?: string
}

const EditorAnswerSelector: FC<IEditorAnswerSelector> = () => {

    
    return (
        <SelectionWrapper name="Тестирование">
            <Stack pl={4} borderLeft={"2px solid #0088CC"} py={2} spacing={2} direction='column'>
                <Flex alignItems={"center"}>
                    <QuestionOutlineIcon mr={2} />
                    <Input border={"1px solid #E2E8F0"} size={"sm"} placeholder="Вопрос" />
                </Flex>
                <Stack>
                    <Flex>
                        <Checkbox mr={2} />
                        <Input size={"sm"} placeholder="Ответ" />
                        <CloseButton ml={1} isDisabled color={"red.500"} size='md' />
                    </Flex>
                    <Flex>
                        <Checkbox mr={2} />
                        <Input size={"sm"} placeholder="Ответ" />
                        <CloseButton ml={1} isDisabled color={"red.500"} size='md' />
                    </Flex>
                    <Flex>
                        <Checkbox mr={2} />
                        <Input size={"sm"} placeholder="Ответ" />
                        <CloseButton ml={1} color={"red.500"} size='md' />
                    </Flex>
                    <Flex>
                        <Checkbox mr={2} />
                        <Input size={"sm"} placeholder="Ответ" />
                        <CloseButton ml={1} color={"red.500"} size='md' />
                    </Flex>
                </Stack>
                <Button size={"sm"}>
                    Добавить ответ
                </Button>
            </Stack>
        </SelectionWrapper>
    )
}

export default EditorAnswerSelector