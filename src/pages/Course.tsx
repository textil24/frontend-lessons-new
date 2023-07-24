import { Box, Image, Heading, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react"
import { Icon } from '@iconify/react';

const Course = () => {

    const bgColor = useColorModeValue('#F4F6F8', '#2D3748')

    return (
        <Box>
            <Stack borderRadius={"40px"} marginTop={"-90px"} paddingTop={"90px"} paddingBottom={"20px"} spacing={3} textAlign={"center"} bgColor={bgColor} marginX={"-16px"} paddingX={"16px"}>
                <Image
                    src="https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png"
                    alt='image'
                    borderRadius='lg'
                    width={"100%"}
                />
                <Heading as='h2' size='xl'>
                    JavaScript Fundamental
                </Heading>
                <Text fontSize='md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dignissimos illo ipsam minima explicabo repellat vitae, sequi dolorem aliquid enim aut at fugit voluptate. Ex sequi quibusdam officia odit!
                </Text>
                <Box>
                    <Button colorScheme='orange' size='md'>
                        Начать
                    </Button>
                </Box>
            </Stack>
            <Stack mt={4} spacing={4}>
                <Box>
                    <Heading mb={3} size='md'>
                        Список уроков
                    </Heading>
                    <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                        <Text fontSize='md'>
                            Введение
                        </Text>
                        <Text fontSize='md'>
                            Переменные
                        </Text>
                        <Text fontSize='md'>
                            Типы данных
                        </Text>
                        <Text fontSize='md'>
                            Циклы for и while
                        </Text>
                    </Stack>
                </Box>
                <Box>
                    <Heading mb={3} size='md'>
                        Учебное пособие включает
                    </Heading>
                    <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="icon-park-outline:video" style={{marginRight: "6px"}} /> Видео (всего 9 минут)
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="ph:question" style={{marginRight: "6px"}} /> Вопросы с выбором ответа
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="fluent:tasks-app-24-filled" style={{marginRight: "6px"}} /> Задачи
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="carbon:lightning" style={{marginRight: "6px"}} />Проверка кода
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Course