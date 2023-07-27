import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react"
import { useEffect } from "react"
import { Breadcrumb, Header, Loading, Error } from "../components/@Common"
import { ButtonNavigation, Monaco, Prism } from "../components/Lesson"

enum LessonElementType {
    title = "title",
    text = "text",
    image = "image",
    prism = "prism",
    monaco = "monaco"
}

const lessonElements = [
    {
        id: 1,
        type: LessonElementType.title,
        content: "1 Title"
    },
    {
        id: 2,
        type: LessonElementType.text,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        type: LessonElementType.image,
        content: "https://bit.ly/dan-abramov"
    },
    {
        id: 4,
        type: LessonElementType.prism,
        content: "let val = 666;"
    },
    {
        id: 5,
        type: LessonElementType.monaco,
        content: "let val = 777;"
    }
]

const Lesson = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="lesson" />
            {/* <Error />
            <Breadcrumb /> */}
            {/* <Loading type="lesson" /> */}
            <Heading my={2} as='h2' size='2xl'>
                Введение
            </Heading>
            <Stack spacing={2}>
                {lessonElements.map(({ id, type, content }) => {
                    switch (type) {
                        case LessonElementType.title:
                            return (
                                <Heading key={id} as='h2' size='xl'>
                                    {content}
                                </Heading>
                            )
                        case LessonElementType.text:
                            return (
                                <Text key={id} fontSize='md'>
                                    {content}
                                </Text>
                            )
                        case LessonElementType.image:
                            return (
                                <Image key={id} sizes={"100%"} src={content} alt='Image' />
                            )
                        case LessonElementType.prism:
                            return (
                                <Prism key={id} code={content} />
                            )
                        case LessonElementType.monaco:
                            return (
                                <Monaco key={id} code={[content]} />
                            )
                        default:
                            return null
                    }
                })}
            </Stack>
            <ButtonNavigation />
        </Box>
    )
}

export default Lesson