import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/@Common'
import { LessonsDragAndDrop, Select, Textarea } from '../components/Admin';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_COURSE } from '../apollo/admin';
export interface IAdmin {
    name: string
    category: string
    preview: string
    description: string
}

const Admin = () => {
    const [createCourse] = useMutation(CREATE_COURSE)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IAdmin>();

    const onSubmit = (data: any) => {
        if (data.name) {
            // createCourse({
            //     variables: {
            //         input: {
            //             ...data
            //         }
            //     }
            // })
            console.log(data)
        }
    };

    return (
        <Container maxW='container.md'>
            <Header type="home" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} direction="column">
                    <Textarea
                        type="name"
                        name="Название"
                        maxLength={50}
                        error={errors.name}
                        register={register} />
                    <Select
                        type="category"
                        error={errors.category}
                        register={register}
                    />
                    <Textarea
                        type="preview"
                        name="Краткое описание"
                        maxLength={100}
                        error={errors.preview}
                        register={register} />
                    <Textarea
                        type="description"
                        name="Подробное описание"
                        maxLength={200}
                        error={errors.description}
                        register={register} />
                    <LessonsDragAndDrop />
                    <Flex>
                        <Button onClick={onSubmit} colorScheme="whatsapp" type='submit'>
                            Сохранить
                        </Button>
                    </Flex>
                </Stack>
            </form>

        </Container>
    )
}

export default Admin