import { Stack, useBoolean, useCheckboxGroup } from "@chakra-ui/react"
import { FC, useState } from "react"
import MultitaskControls from "./MultitaskControls"
import MultitaskAnswers from "./MultitaskAnswers"
import MultitaskTitle from "./MultitaskTitle"

interface IMultitask {
    type: "answerSelector" | "task"
    task?: {
        title: string,
        text: string
    },
    answerSelector?: {
        question: string
        answers: string[]
        corrects: string[]
    }
}

const Multitask: FC<IMultitask> = ({ type, task, answerSelector }) => {

    const { value: selectAnswers, setValue, getCheckboxProps } = useCheckboxGroup()
    const [flag, setFlag] = useBoolean()
    const [errorCount, setErrorCount] = useState(3)

    const getStatusAnswers = () => {

        if (selectAnswers.length !== answerSelector?.corrects.length) {
            return false
        }

        for (const answer of selectAnswers) {
            if (!answerSelector?.corrects.includes(String(answer))) {
                return false;
            }
        }

        return true;

    }
    const statusAnswers = getStatusAnswers()
    const isFlagAndStatus = flag && statusAnswers;

    const borderLeftColorMultitask = isFlagAndStatus ? "#22C35E" : "#0088CC"
    const borderLeftColorTask = flag ? "#22C35E" : "#0088CC"
    const borderLeft = `2px solid ${type === "answerSelector" ? borderLeftColorMultitask : borderLeftColorTask}`

    return (
        <Stack pl={4} borderLeft={borderLeft} py={2} spacing={2} direction='column'>
            <MultitaskTitle
                type={type}
                flag={flag}
                isFlagAndStatus={isFlagAndStatus}

                question={answerSelector?.question}
                title={task?.title}
            />
            <MultitaskAnswers
                type={type}
                flag={flag}
                isFlagAndStatus={isFlagAndStatus}
                statusAnswers={statusAnswers}

                off={setFlag.off}
                toggle={setFlag.toggle}
                errorCount={errorCount}
                setErrorCount={setErrorCount}
                text={task?.text}

                getCheckboxProps={getCheckboxProps}
                answers={answerSelector?.answers}
            />
            <MultitaskControls
                type={type}
                flag={flag}
                statusAnswers={statusAnswers}

                on={setFlag.on}
                errorCount={errorCount}
                setErrorCount={setErrorCount}

                setValue={setValue}
                selectAnswers={selectAnswers}
                corrects={answerSelector?.corrects}
            />
        </Stack>
    )
}

export default Multitask