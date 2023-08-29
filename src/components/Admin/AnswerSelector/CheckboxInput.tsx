import { FieldError, UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import FormInput from "./FormInput"
import { FC } from "react"
import { Inputs } from "./EditAnswerSelector"

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
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <input onClick={() => clearErrors("corrects")} {...register(typeCorrect)} type="checkbox" value={text} />
            <FormInput
                typeAnswer={typeAnswer}
                typeCorrect={typeCorrect}
                register={register}
                error={errorAnswer}
                setValue={setValue}
            />
        </div>
    )
}

export default CheckboxInput