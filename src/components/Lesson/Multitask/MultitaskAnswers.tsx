import { Box, Checkbox, Stack } from "@chakra-ui/react"
import { FC } from "react"

interface IMultitaskAnswers {
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
        isEstimated: boolean
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

const MultitaskAnswers: FC<IMultitaskAnswers> = ({ addProgress, lessonId, task, answerSelector, progress, statusAnswers, text, flag, type, isFlagAndStatus, off, toggle, answers, errorCount, setErrorCount, getCheckboxProps }) => {

    const checkboxColorProgress = progress && progress.isEstimated ? "whatsapp" : "telegram"
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
                        isChecked={progress && progress.isEstimated ? true : flag}
                        onChange={() => {
                            toggle(),
                            flag && addProgress({
                                variables: {
                                    input: {
                                        tgUserId: 666,
                                        lessonId: lessonId,
                                        isEstimated: true,
                                        contentId: type === "answerSelector" ? answerSelector?.id : task?.id
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