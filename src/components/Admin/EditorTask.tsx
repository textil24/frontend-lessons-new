import { Icon } from '@iconify/react';
import { Flex, Input, Stack } from "@chakra-ui/react"

const EditorTask = () => {
    return (
        <Stack pl={4} borderLeft={"2px solid #0088CC"} py={2} spacing={2} direction='column'>
            <Flex alignItems={"center"}>
                <Icon
                    icon="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"
                    style={{ marginRight: "8px" }}
                />
                <Input border={"1px solid #E2E8F0"} size={"sm"} placeholder="Вопрос" />
            </Flex>
            <Input border={"1px solid #E2E8F0"} size={"sm"} placeholder="Ответ" />
        </Stack>
    )
}

export default EditorTask