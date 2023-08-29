import { FC } from "react"
import { FormError } from "."
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { Inputs } from "./EditAnswerSelector"

interface IFormInput {
    typeAnswer: "answers" | `answers.${number}`
    typeCorrect: `corrects.${number}`
    register: UseFormRegister<Inputs>
    error: FieldError | undefined
    setValue: UseFormSetValue<Inputs>
}

const FormInput: FC<IFormInput> = ({ typeAnswer, typeCorrect, error, register, setValue }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <input {...register(typeAnswer, { required: true })} onChange={e => setValue(typeCorrect, e.target.value)} placeholder="Ответ" />
            <FormError error={error} />
        </div>
    )
}

export default FormInput