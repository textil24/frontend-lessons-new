import { Box, Button, Stack } from "@chakra-ui/react"
import { FC, useEffect } from "react"
import Alert from "./Alert"
interface IMultitaskControls {
    setDisabled: (args: boolean) => void
    addProgress: (args: any) => void
    lessonId: string | undefined
    task?: {
        id: number
        title: string,
        text: string
    },
    answerSelector?: {
        id: number
        question: string
        answers: string[]
        corrects: string[]
    }

    progress: {
        tgUserId: number
        contentId: number
        lessonId: string
        isCorrect: boolean
    } | undefined

    type: "answerSelector" | "task"

    flag: boolean
    on: () => void
    errorCount: number
    setErrorCount: (args: number) => void
    setValue: (args: string[]) => void
    statusAnswers: boolean
    selectAnswers: (string | number)[]
    corrects?: string[]
}

const MultitaskControls: FC<IMultitaskControls> = ({ setDisabled, addProgress, lessonId, task, answerSelector, progress, type, flag, errorCount, setErrorCount, statusAnswers, selectAnswers, on, setValue, corrects }) => {

    useEffect(() => {
        progress && progress.isCorrect && setValue(corrects ?? [])
    }, [progress])

    const isEmptySelectAnswers = selectAnswers.length === 0
    const statusAnswer = progress && progress.isCorrect ? <Alert status="success" /> : flag ? (statusAnswers ? <Alert status="success" /> : <Alert status="error" errorCount={errorCount} />) : <></>

    if (type === "task") {
        return <></>
    }

    return (
        <Box>
            <Stack spacing={2} direction='row'>
                {progress && progress.isCorrect ? <></> : !(flag && statusAnswers) && (
                    <>
                        <Button onClick={() => {
                            on(),
                                errorCount && !statusAnswers && setErrorCount(errorCount - 1)
                            statusAnswers && addProgress({
                                variables: {
                                    input: {
                                        tgUserId: 666,
                                        lessonId: lessonId,
                                        contentId: type === "answerSelector" ? answerSelector?.id : task?.id,
                                        isCorrect: true
                                    }
                                }
                            })
                            statusAnswers && setDisabled(true)
                        }} isDisabled={isEmptySelectAnswers}>
                            Проверить
                        </Button>
                        {!errorCount && (
                            <Button onClick={() => {
                                setValue(corrects ?? []),
                                    addProgress({
                                        variables: {
                                            input: {
                                                tgUserId: 666,
                                                lessonId: lessonId,
                                                contentId: type === "answerSelector" ? answerSelector?.id : task?.id,
                                                isCorrect: true
                                            }
                                        }
                                    }),
                                    setDisabled(true)
                            }} colorScheme="whatsapp">
                                Показать ответ
                            </Button>
                        )}
                    </>
                )}
            </Stack>
            {statusAnswer}
        </Box>
    )
}

export default MultitaskControls