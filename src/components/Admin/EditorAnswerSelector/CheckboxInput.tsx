import { FieldError, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import FormInput from "./FormInput"
import { FC } from "react"
import { Inputs } from "./EditorAnswerSelector"
import { Checkbox, Flex, Input } from "@chakra-ui/react"
import { SelectionWrapper } from ".."

interface ICheckboxInput {
    text: string
    typeAnswer: "answers" | `answers.${number}`
    typeCorrect: `corrects.${number}`
    register: UseFormRegister<Inputs>
    errorAnswer: FieldError | undefined
    clearErrors: UseFormClearErrors<Inputs>
    setValue: UseFormSetValue<Inputs>
}

const CheckboxInput: FC<ICheckboxInput> = ({ text, typeAnswer, typeCorrect, register, errorAnswer, clearErrors, setValue }) => {

    return (
        <SelectionWrapper name="Ответ">
            <Flex gap={4}>
                <Checkbox onClick={() => clearErrors("corrects")} {...register(typeCorrect)} type="checkbox" value={text} />
                <Flex>
                    <FormInput
                        typeAnswer={typeAnswer}
                        typeCorrect={typeCorrect}
                        register={register}
                        error={errorAnswer}
                        setValue={setValue}
                    />
                </Flex>
            </Flex>
        </SelectionWrapper>
    )
}

export default CheckboxInput