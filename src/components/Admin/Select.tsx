import { Select as SelectWrapper, FormControl, Text, Box, Heading, Stack } from '@chakra-ui/react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { IAdmin } from '../../pages/Admin'
import { FC } from 'react'

interface ISelect {
    type: "category"
    error: FieldError | undefined
    register: UseFormRegister<IAdmin>
}

const Select: FC<ISelect> = ({ type, error, register }) => {

    console.log(error)

    return (
        <Stack direction={"column"}>
            <Heading display={"flex"} size={"sm"}>
                Категория <Text ml={1} color="red.500">*</Text>
            </Heading>
            <SelectWrapper
                {...register(type, { required: { value: true, message: 'Обязательно нужно выбрать категорию' } })}
                _focus={{
                    outline: "none",
                    border: "none",
                    transition: "none"
                }}
                _placeholder={{
                    color: "#718096"
                }}
                height={"46px"}
                outline={`1px solid ${error ? "#FE0000" : "#CCCED1"}`}
                border={"none"}
                focusBorderColor={error ? "#FE0000" : "#22C35E"}
                placeholder='Выбрать категорию'
            >
                <option value='course'>Курс</option>
                <option value='quiz'>Тестирование</option>
                <option value='article'>Статья</option>
            </SelectWrapper>
            {error && <Text color={"red.500"}>{error?.message}</Text>}
        </Stack>
    )
}

export default Select