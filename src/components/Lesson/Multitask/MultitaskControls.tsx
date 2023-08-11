import { Box, Button, Stack } from "@chakra-ui/react"
import { FC, useEffect } from "react"
import Alert from "./Alert"
import { useMutation } from "@apollo/client"
import { ICreateProgress } from "../../../apollo/types"
import { ADD_PROGRESS } from "../../../apollo/progress"

interface IMultitaskControls {
    progress: {
        tgUserId: number
        contentId: number
        lessonId: string
        isEstimated: boolean
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

const MultitaskControls: FC<IMultitaskControls> = ({ progress, type, flag, errorCount, setErrorCount, statusAnswers, selectAnswers, on, setValue, corrects }) => {

    useEffect(() => {
        progress && progress.isEstimated && setValue(corrects ?? [])
    }, [progress])

    const isEmptySelectAnswers = selectAnswers.length === 0
    const statusAnswer = progress && progress.isEstimated ? <Alert status="success" /> : flag ? (statusAnswers ? <Alert status="success" /> : <Alert status="error" errorCount={errorCount} />) : <></>

    if (type === "task") {
        return <></>
    }

    return (
        <Box>
            <Stack spacing={2} direction='row'>
                 {progress && progress.isEstimated ? <></> : !(flag && statusAnswers) && (
                    <>
                        <Button onClick={() => { on(), errorCount && !statusAnswers && setErrorCount(errorCount - 1) }} isDisabled={isEmptySelectAnswers}>
                            Проверить
                        </Button>
                        {!errorCount && (
                            <Button onClick={() => setValue(corrects ?? [])} colorScheme="whatsapp">
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