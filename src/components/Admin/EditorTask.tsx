import { Icon } from '@iconify/react';
import { Text, Button, Flex, Input, Stack, FormControl, FormErrorMessage, FormLabel, Heading } from "@chakra-ui/react"
import { SelectionWrapper } from '.';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { FC } from 'react';
import { IEditLesson } from '../../pages/Admin/EditLesson';

interface IEditorTask {
    index: number
    maxLength: number
    errors: FieldErrors<IEditLesson> | undefined
    register: UseFormRegister<IEditLesson>
}

const EditorTask: FC<IEditorTask> = ({ index, register, errors, maxLength }) => {

    console.log(errors)

    const errorTitle = errors?.content?.[index]?.title
    const errorText = errors?.content?.[index]?.text

    const id = 0

    // type TTitle = typeof `content.${id}.title`
    // const typeTitle: TTitle = `content.${id}.title`
    // const typeText = `content.${id}.text`


    return (
        <SelectionWrapper name='Задача'>
            <Stack pl={4} borderLeft={`2px solid #0088CC`} py={2} spacing={2} direction='column'>
                <FormControl isInvalid={errorTitle && true}>
                    <FormLabel display={"flex"} fontWeight={"bold"} size={"sm"}>
                        Вопрос <Text ml={1} color="red.500">*</Text>
                    </FormLabel>
                    <Flex alignItems={"center"}>
                        <Icon
                            icon="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"
                            style={{ marginRight: "12px" }}
                        />
                        <Input
                            {...register(`content.${index}.title`, {
                                required: { value: true, message: 'Поле обязательно для заполнения' },
                                maxLength: { value: maxLength, message: `Максимально ${maxLength} символов` }
                            })}
                            placeholder="Вопрос"
                        />
                    </Flex>
                    <FormErrorMessage>
                        {errorTitle?.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errorText && true}>
                    <FormLabel display={"flex"} fontWeight={"bold"} size={"sm"}>
                        Ответ <Text ml={1} color="red.500">*</Text>
                    </FormLabel>
                    <Input
                        {...register(`content.${index}.text`, {
                            required: { value: true, message: 'Поле обязательно для заполнения' },
                            maxLength: { value: maxLength, message: `Максимально ${maxLength} символов` }
                        })}
                        placeholder="Ответ"
                    />
                    <FormErrorMessage>
                    {errorText?.message}
                    </FormErrorMessage>
                </FormControl>
            </Stack>
        </SelectionWrapper>
    )
}

export default EditorTask