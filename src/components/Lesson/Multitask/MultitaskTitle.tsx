import { QuestionOutlineIcon } from "@chakra-ui/icons"
import { Heading } from "@chakra-ui/react"
import { FC } from "react"
import { Icon } from '@iconify/react';

interface IMultitaskTitle {
    type: "answerSelector" | "task"
    flag: boolean
    isFlagAndStatus: boolean
    question?: string
    title?: string
}

const MultitaskTitle: FC<IMultitaskTitle> = ({ type, flag, isFlagAndStatus, question, title }) => {

    const titleColorMultitask = isFlagAndStatus ? "#22C35E" : "#1A202C"
    const titleColorTask = flag ? "#22C35E" : "#1A202C"
    const titleColor = type === "answerSelector" ? titleColorMultitask : titleColorTask

    return (
        <Heading display={"flex"} alignItems={"center"} color={titleColor} size='sm'>
            {type === "answerSelector" ? (
                <>
                    <QuestionOutlineIcon mr={2} />
                    {question}
                </>
            ) : (
                <>
                    <Icon
                        icon="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"
                        style={{ marginRight: "8px" }}
                    />
                    {title}
                </>
            )}
        </Heading>
    )
}

export default MultitaskTitle