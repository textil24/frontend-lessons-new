import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react"
import { useEffect } from "react"
import { Breadcrumb, Header, Loading, Error } from "../components/@Common"
import { ButtonNavigation, Monaco, Multitask, Prism } from "../components/Lesson"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_LESSON } from "../apollo/lesson"
import { IGetLesson } from "../apollo/types"
import parse from 'html-react-parser';

enum LessonElementType {
    title = "title",
    text = "text",
    image = "image",
    answerSelector = "answerSelector",
    task = "task",
    prism = "prism",
    monaco = "monaco"
}

const Lesson = () => {
    const params = useParams()
    const { data: lesson, loading, error } = useQuery<IGetLesson>(GET_LESSON, {
        variables: {
            getLessonId: params.id ?? ""
        }
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [params.id])

    return (
        <Box>
            <Header lesson={lesson} loading={loading} type="lesson" />
            {error && <Error />}
            {loading && <Loading type="lesson" />}
            {lesson && (
                <>
                    <Breadcrumb
                        courseId={lesson.getLesson.course.id}
                        courseName={lesson.getLesson.course.name}
                        lessonId={lesson.getLesson.id}
                        lessonOrder={lesson.getLesson.orderBy}
                    />
                    <Heading my={2} fontSize={24}>
                        {lesson.getLesson.name}
                    </Heading>
                    <code>/files/names</code>
                    <Stack spacing={3}>
                        {lesson?.getLesson.content.map((item, index) => {
                            switch (item.type) {
                                case LessonElementType.title:
                                    return (
                                        <Heading mt={4} key={`${index}_${item.id}`} size='md'>
                                            {item.content}
                                        </Heading>
                                    )
                                case LessonElementType.text:
                                    return (
                                        <Text key={`${index}_${item.id}`} fontSize='md'>
                                            {parse(item.content)}
                                        </Text>
                                    )
                                case LessonElementType.image:
                                    return (
                                        <Image key={`${index}_${item.id}`} sizes={"100%"} src={item.content} alt='Image' />
                                    )
                                case LessonElementType.answerSelector:
                                    return (
                                        <Multitask
                                            type="answerSelector"
                                            answerSelector={{
                                                question: item.question,
                                                answers: item.answers,
                                                corrects: item.corrects
                                            }}
                                        />
                                    )
                                case LessonElementType.task:
                                    return (
                                        <Multitask
                                            type="task"
                                            task={{
                                                title: item.title,
                                                text: item.text
                                            }}
                                        />
                                    )
                                case LessonElementType.prism:
                                    return (
                                        <Prism key={`${index}_${item.id}`} code={item.content} />
                                    )
                                case LessonElementType.monaco:
                                    return (
                                        <Monaco key={`${index}_${item.id}`} code={[item.content]} />
                                    )
                                default:
                                    return null
                            }
                        })}
                    </Stack>
                    <ButtonNavigation
                        courseId={lesson.getLesson.course.id}
                        prevId={lesson.getLesson.prevLessonId}
                        nextId={lesson.getLesson.nextLessonId} />
                </>
            )}
        </Box>
    )
}

export default Lesson