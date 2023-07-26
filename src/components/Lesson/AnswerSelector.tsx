import { QuestionOutlineIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Heading, Stack } from "@chakra-ui/react"

const AnswerSelector = () => {
    return (
        <Box
            py={2}
            pl={"16px"}
            position={"relative"}
            _after={
                {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "1px",
                    height: "100%",
                    bgColor: "#DD6B20"
                }
            }
        >
            <Stack spacing={1}>
                <Heading display={"flex"} alignItems={"center"} as='h5' size='sm'>
                    <QuestionOutlineIcon mr={2} />
                    Ты любишь GraphQL и Apollo?
                </Heading>
                <Checkbox colorScheme='orange'>
                    1 Ответ
                </Checkbox>
                <Checkbox colorScheme='orange'>
                    2 Ответ
                </Checkbox>
                <Checkbox colorScheme='orange'>
                    3 Ответ
                </Checkbox>
                <Checkbox colorScheme='orange'>
                    4 Ответ
                </Checkbox>
                <Box>
                    <Button colorScheme='gray'>
                        Отправить
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default AnswerSelector