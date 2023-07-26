import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Breadcrumb, Header } from "../components/@Common";
import { Info } from "../components/Course";

interface IBoxItem {
    id: string,
    icon?: React.ReactNode
    link?: string
    text: string
}

export interface IInfo {
    data: {
        id: string
        title: string
        type: "link" | "icon",
        boxItems: IBoxItem[]
    }
}

const infoLink: IInfo = {
    data: {
        id: "1",
        type: "link",
        title: "Заголовок Link",
        boxItems: [
            {
                id: "2",
                link: "/lesson",
                text: "Введение"
            },
            {
                id: "3",
                link: "/lesson",
                text: "Переменные"
            },
            {
                id: "4",
                link: "/lesson",
                text: "Типы данных"
            },
            {
                id: "5",
                link: "/lesson",
                text: "Циклы for и while"
            }
        ]
    }
}

const infoIcon: IInfo = {
    data: {
        id: "6",
        type: "icon",
        title: "Заголовок Icon",
        boxItems: [
            {
                id: "7",
                icon: <Icon icon="icon-park-outline:video" style={{ marginRight: "6px" }} />,
                text: "Видео (всего 9 минут)"
            },
            {
                id: "8",
                icon: <Icon icon="ph:question" style={{ marginRight: "6px" }} />,
                text: "Вопросы с выбором ответа"
            },
            {
                id: "9",
                icon: <Icon icon="fluent:tasks-app-24-filled" style={{ marginRight: "6px" }} />,
                text: "Задачи"
            },
            {
                id: "10",
                icon: <Icon icon="carbon:lightning" style={{ marginRight: "6px" }} />,
                text: "Проверка кода"
            }
        ]
    }
}


const Course = () => {

    const bgColor = useColorModeValue('#F4F6F8', '#2D3748')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="course" />
            <Stack borderBottomRadius={"40px"} marginTop={"-90px"} paddingTop={"90px"} paddingBottom={"25px"} spacing={3} textAlign={"left"} bgColor={bgColor} marginX={"-16px"} paddingX={"16px"}>
                <Breadcrumb type="course" />
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
                <Info data={infoLink} />
                <Info data={infoIcon} />
            </Stack>
        </Box>
    )
}

export default Course