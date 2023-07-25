import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Image, Heading, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react"
import { Icon } from '@iconify/react';
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const Course = () => {

    const bgColor = useColorModeValue('#F4F6F8', '#2D3748')

    return (
        <Box>
            <Header type="course" />
            <Stack borderBottomRadius={"40px"} marginTop={"-90px"} paddingTop={"90px"} paddingBottom={"25px"} spacing={3} textAlign={"left"} bgColor={bgColor} marginX={"-16px"} paddingX={"16px"}>
                <Breadcrumb type="course" />
                {/* <Image
                    src="https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png"
                    alt='image'
                    borderRadius='lg'
                    width={"100%"}
                /> */}
                <Heading as='h2' size='xl'>
                    JavaScript Fundamental
                </Heading>
                <Text fontSize='lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dignissimos illo ipsam minima explicabo repellat vitae, sequi dolorem aliquid enim aut at fugit voluptate. Ex sequi quibusdam officia odit!
                </Text>
                <Link to={"/lesson"}>
                    <Box mt={5} textAlign={"center"}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='whatsapp' size='md'>
                            Приступить
                        </Button>
                    </Box>
                </Link>
            </Stack>
            <Stack mt={4} spacing={4}>
                <Box>
                    <Heading mb={3} size='md'>
                        Список уроков
                    </Heading>
                    <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                        <Link to={"/lesson"}>
                            <Text fontSize='md'>
                                Введение
                            </Text>
                        </Link>
                        <Link to={"/lesson"}>
                            <Text fontSize='md'>
                                Переменные
                            </Text>
                        </Link>
                        <Link to={"/lesson"}>
                            <Text fontSize='md'>
                                Типы данных
                            </Text>
                        </Link>
                        <Link to={"/lesson"}>
                            <Text fontSize='md'>
                                Циклы for и while
                            </Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Heading mb={3} size='md'>
                        Учебное пособие включает
                    </Heading>
                    <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="icon-park-outline:video" style={{ marginRight: "6px" }} /> Видео (всего 9 минут)
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="ph:question" style={{ marginRight: "6px" }} /> Вопросы с выбором ответа
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="fluent:tasks-app-24-filled" style={{ marginRight: "6px" }} /> Задачи
                        </Text>
                        <Text display={"flex"} alignItems={"center"} fontSize='md'>
                            <Icon icon="carbon:lightning" style={{ marginRight: "6px" }} />Проверка кода
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Course