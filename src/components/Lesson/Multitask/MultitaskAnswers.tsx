import { Box, Checkbox, Stack } from "@chakra-ui/react"
import { FC } from "react"

interface IMultitaskAnswers {
    type: "answerSelector" | "task"
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

const MultitaskAnswers: FC<IMultitaskAnswers> = ({ statusAnswers, text, flag, type, isFlagAndStatus, off, toggle, answers, errorCount, setErrorCount, getCheckboxProps }) => {

    const checkboxColor = isFlagAndStatus ? "whatsapp" : "telegram"

    return (
        <Stack spacing={2} direction='column'>
            {type === "answerSelector" ? (
                <>
                    {answers?.map((text, index) =>
                        <Box key={index} onClick={() => { off(), !errorCount && isFlagAndStatus && setErrorCount(3), statusAnswers && setErrorCount(3)}}>
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
                        onChange={() => toggle()}
                        colorScheme="whatsapp"
                        textDecoration={flag ? "line-through" : "none"}
                    >
                        {text}
                    </Checkbox>
                </Box>
            )}
        </Stack>
    )
}

export default MultitaskAnswers