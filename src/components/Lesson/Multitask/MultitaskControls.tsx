import { Box, Button, Stack } from "@chakra-ui/react"
import { FC } from "react"
import Alert from "./Alert"

interface IMultitaskControls {
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

const MultitaskControls: FC<IMultitaskControls> = ({ type, flag, errorCount, setErrorCount, statusAnswers, selectAnswers, on, setValue, corrects }) => {

    const isEmptySelectAnswers = selectAnswers.length === 0
    const statusAnswer = flag ? (statusAnswers ? <Alert status="success" /> : <Alert status="error" errorCount={errorCount} />) : <></>

    if (type === "task") {
        return <></>
    }

    return (
        <Box>
            <Stack spacing={2} direction='row'>
                {!(flag && statusAnswers) && (
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