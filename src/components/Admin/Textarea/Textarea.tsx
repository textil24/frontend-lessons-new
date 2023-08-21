import { FC } from "react";
import "./Textarea.css"
import TextareaAutosize from 'react-textarea-autosize';
import { FieldError, UseFormRegister } from "react-hook-form";
import { IAdmin } from "../../../pages/Admin";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface ITextarea {
    name: string
    type: "name" | "preview" | "description"
    maxLength: number
    error: FieldError | undefined
    register: UseFormRegister<IAdmin>
}

const Textarea: FC<ITextarea> = ({ name, type, maxLength: value, error, register }) => {

    return (
        <Stack direction={"column"}>
            <Heading display={"flex"} size={"sm"}>
                {name} <Text ml={1} color="red.500">*</Text>
            </Heading>
            <TextareaAutosize
                {...register(type, {
                    required: { value: true, message: 'Поле обязательно для заполнения' },
                    maxLength: { value, message: `Максимально ${value} символов` }
                })}
                className={`textarea ${error && "error"}`}
                placeholder={name} />
            {error && <Text color={"red.500"}>{error?.message}</Text>}
        </Stack>
    )
}

export default Textarea