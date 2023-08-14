import { Button, Heading, Stack, useBoolean, useCheckboxGroup } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import MultitaskControls from "./MultitaskControls"
import MultitaskAnswers from "./MultitaskAnswers"
import MultitaskTitle from "./MultitaskTitle"
import { useMutation, useQuery } from "@apollo/client"
import { ADD_PROGRESS, GET_PROGRESS } from "../../../apollo/progress"
import { ICreateProgress, IGetProgress } from "../../../apollo/types"

interface IMultitask {
    type: "answerSelector" | "task"
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
}

const Multitask: FC<IMultitask> = ({ type, lessonId, task, answerSelector }) => {

    const { value: selectAnswers, setValue, getCheckboxProps } = useCheckboxGroup()
    const [flag, setFlag] = useBoolean()
    const [disabled, setDisabled] = useState(false)
    const [errorCount, setErrorCount] = useState(3)

    const { data } = useQuery<IGetProgress>(GET_PROGRESS, {
        fetchPolicy: 'network-only',
        variables: {
            tgUserId: 666,
            lessonId: lessonId,
            contentId: type === "answerSelector" ? answerSelector?.id : task?.id
        },
    })

    const [addProgress, { data: progressMutation }] = useMutation<ICreateProgress>(ADD_PROGRESS)

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
    const progress = data?.getProgress

    const borderLeftColorProgress = progress && progress.isCorrect && "#22C35E"
    const borderLeftColorMultitask = isFlagAndStatus ? "#22C35E" : "#0088CC"
    const borderLeftColorTask = flag ? "#22C35E" : "#0088CC"
    const borderLeft = `2px solid ${progress ? borderLeftColorProgress : type === "answerSelector" ? borderLeftColorMultitask : borderLeftColorTask}`

    return (
        <Stack pl={4} borderLeft={borderLeft} py={2} spacing={2} direction='column' style={disabled ? { pointerEvents: "none" } : progress ? { pointerEvents: "none" } : {}}>
            <MultitaskTitle
                progress={progress}

                type={type}
                flag={flag}
                isFlagAndStatus={isFlagAndStatus}

                question={answerSelector?.question}
                title={task?.title}
            />
            <MultitaskAnswers
                setDisabled={setDisabled}
                addProgress={addProgress}
                lessonId={lessonId}
                task={task}
                answerSelector={answerSelector}
                progress={progress}
                progressMutation={progressMutation}

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
            setDisabled={setDisabled}
                addProgress={addProgress}
                lessonId={lessonId}
                task={task}
                answerSelector={answerSelector}
                progress={progress}

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