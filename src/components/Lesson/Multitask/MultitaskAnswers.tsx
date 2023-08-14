import { Box, Checkbox, Stack } from "@chakra-ui/react"
import { FC } from "react"
import { ICreateProgress } from "../../../apollo/types"

interface IMultitaskAnswers {
    setDisabled: (args: boolean) => void
    addProgress: (args: any) => void
    progressMutation: ICreateProgress | undefined | null
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

    // type: "answerSelector" | "task"
    type: any
    flag: boolean
    isFlagAndStatus: boolean
    statusAnswers: boolean

    off: () => void
    toggle: () => void

    errorCount: number
    setErrorCount: (args: number) => void
    getCheckboxProps: (args: { value: string }) => object

    text?: string
    answers?: string[]
}

const MultitaskAnswers: FC<IMultitaskAnswers> = ({ setDisabled, addProgress, progressMutation, lessonId, task, answerSelector, progress, statusAnswers, text, flag, type, isFlagAndStatus, off, toggle, answers, errorCount, setErrorCount, getCheckboxProps }) => {

    const checkboxColorProgress = progress && progress.isCorrect ? "whatsapp" : "telegram"
    const checkboxColor = progress ? checkboxColorProgress : isFlagAndStatus ? "whatsapp" : "telegram"

    return (
        <Stack spacing={2} direction='column'>
            {type === "answerSelector" ? (
                <>
                    {answers?.map((text, index) =>
                        <Box key={index} onClick={() => { off(), !errorCount && isFlagAndStatus && setErrorCount(3), statusAnswers && setErrorCount(3) }}>
                            <Checkbox
                                colorScheme={checkboxColor}
                                {...getCheckboxProps({ value: text })}>
                                {text}
                            </Checkbox>
                        </Box>
                    )}
                </>
            ) : (
                <Box>
                    <Checkbox
                        isChecked={progress && progress.isCorrect ? true : flag}
                        onChange={() => {
                            setDisabled(true)
                            toggle(),
                            !(progressMutation?.createProgress.contentId === task?.id) && !flag && addProgress({
                                variables: {
                                    input: {
                                        tgUserId: 666,
                                        lessonId: lessonId,
                                        contentId: task?.id,
                                        isCorrect: true
                                    }
                                }
                            })
                        }}
                        colorScheme="whatsapp"
                        textDecoration={progress ? "line-through" : flag ? "line-through" : "none"}
                    >
                        {text}
                    </Checkbox>
                </Box>
            )}
        </Stack>
    )
}

export default MultitaskAnswers