import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Button, Stack, useColorModeValue } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Breadcrumb, Header, Loading, Error } from "../components/@Common";
import { Info } from "../components/Course";
import { GET_COURSE } from "../apollo/course";
import { useQuery } from "@apollo/client";
import { IGetCourse } from "../apollo/types";

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

// const infoLink: IInfo = {
//     data: {
//         id: "1",
//         type: "link",
//         title: "Список уроков",
//         boxItems: [
//             {
//                 id: "2",
//                 link: "/lesson",
//                 text: "Введение"
//             },
//             {
//                 id: "3",
//                 link: "/lesson",
//                 text: "Переменные"
//             },
//             {
//                 id: "4",
//                 link: "/lesson",
//                 text: "Типы данных"
//             },
//             {
//                 id: "5",
//                 link: "/lesson",
//                 text: "Циклы for и while"
//             }
//         ]
//     }
// }

// const infoIcon: IInfo = {
//     data: {
//         id: "6",
//         type: "icon",
//         title: "Это учебное пособие",
//         boxItems: [
//             {
//                 id: "7",
//                 icon: <Icon icon="icon-park-outline:video" style={{ marginRight: "6px" }} />,
//                 text: "Видео (всего 9 минут)"
//             },
//             {
//                 id: "8",
//                 icon: <Icon icon="ph:question" style={{ marginRight: "6px" }} />,
//                 text: "Вопросы с выбором ответа"
//             },
//             {
//                 id: "9",
//                 icon: <Icon icon="fluent:tasks-app-24-filled" style={{ marginRight: "6px" }} />,
//                 text: "Задачи"
//             },
//             {
//                 id: "10",
//                 icon: <Icon icon="carbon:lightning" style={{ marginRight: "6px" }} />,
//                 text: "Проверка кода"
//             }
//         ]
//     }
// }


const Course = () => {

    const bgColor = useColorModeValue('#F4F6F8', '#2D3748')
    const params = useParams()

    const { data: course, loading, error } = useQuery<IGetCourse>(GET_COURSE, {
        variables: {
            getCourseId: params.id ?? ""
        }
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="course" />
            <Stack borderBottomRadius={"40px"} marginTop={"-90px"} paddingTop={"90px"} paddingBottom={"25px"} spacing={3} textAlign={"left"} bgColor={bgColor} marginX={"-16px"} paddingX={"16px"}>
                {error && <Error />}
                {loading && <Loading type="course-about" />}
                {course && (
                    <>
                        <Breadcrumb courseId={course?.getCourse.id} type="course" />
                        <Heading as='h2' size='xl'>
                            {course?.getCourse.name}
                        </Heading>
                        <Text fontSize='lg'>
                            {course?.getCourse.description}
                        </Text>
                        <Link to={"/lessons/" + course?.getCourse.lessons[0].id}>
                            <Box mt={5} textAlign={"center"}>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='whatsapp' size='md'>
                                    Приступить
                                </Button>
                            </Box>
                        </Link>
                    </>
                )}
            </Stack>
            <Stack mt={4} spacing={4}>
                {loading && <Loading type="course-info" />}
                {course &&
                    <Info data={{
                        data: {
                            id: "1",
                            type: "link",
                            title: "Список уроков",
                            boxItems: course?.getCourse.lessons.map(lesson =>
                            ({
                                id: lesson.id,
                                link: "/lessons/" + lesson.id,
                                text: lesson.name
                            }))
                        }
                    }} />
                }
                {/* <Info data={infoIcon} /> */}
            </Stack>
        </Box>
    )
}

export default Course