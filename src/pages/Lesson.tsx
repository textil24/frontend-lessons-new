import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react"
import { useEffect } from "react"
import { Breadcrumb, Header, Loading, Error } from "../components/@Common"
import { ButtonNavigation, Monaco, Prism } from "../components/Lesson"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_LESSON } from "../apollo/lesson"
import { IGetLesson } from "../apollo/types"

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
    const params = useParams()
    const { data: lesson, loading, error } = useQuery<IGetLesson>(GET_LESSON, {
        variables: {
            getLessonId: params.id ?? ""
        }
    })

    console.log(lesson)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="lesson" />
            {error && <Error />}
            {loading && <Loading type="lesson" />}
            {lesson && (
                <>
                    <Breadcrumb courseId={lesson.getLesson.course.id} lessonId={lesson.getLesson.id} />
                    <Heading my={2} as='h2' size='2xl'>
                        {lesson.getLesson.name}
                    </Heading>
                    <Stack spacing={2}>
                        {lesson?.getLesson.content.map(({ id, type, content }, index) => {
                            switch (type) {
                                case LessonElementType.title:
                                    return (
                                        <Heading key={`${index}_${id}`} as='h2' size='xl'>
                                            {content}
                                        </Heading>
                                    )
                                case LessonElementType.text:
                                    return (
                                        <Text key={`${index}_${id}`} fontSize='md'>
                                            {content}
                                        </Text>
                                    )
                                case LessonElementType.image:
                                    return (
                                        <Image key={`${index}_${id}`} sizes={"100%"} src={content} alt='Image' />
                                    )
                                case LessonElementType.prism:
                                    return (
                                        <Prism key={`${index}_${id}`} code={content} />
                                    )
                                case LessonElementType.monaco:
                                    return (
                                        <Monaco key={`${index}_${id}`} code={[content]} />
                                    )
                                default:
                                    return null
                            }
                        })}
                    </Stack>
                    <ButtonNavigation prevId={lesson.getLesson.prevLessonId} nextId={lesson.getLesson.nextLessonId} />
                </>
            )}
        </Box>
    )
}

export default Lesson