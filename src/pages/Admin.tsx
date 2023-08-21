import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/@Common'
import { Select, Textarea } from '../components/Admin';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_COURSE } from '../apollo/admin';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { DragHandleIcon } from '@chakra-ui/icons';

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

    const DATA = [
        {
            id: "1",
            name: "Урок 1. Walmart",
            items: [
                {
                    id: 1,
                    name: "3% Milk"
                },
                {
                    id: 2,
                    name: "Butter"
                }
            ],
            tint: 1
        },
        {
            id: "2",
            name: "Урок 2. Indigo",
            items: [
                {
                    id: 3,
                    name: "Designing Data"
                },
                {
                    id: 4,
                    name: "Atomic Habits"
                }
            ],
            tint: 2
        },
        {
            id: "3",
            name: "Урок 3. Lowes",
            items: [
                {
                    id: 5,
                    name: "Workbench"
                },
                {
                    id: 6,
                    name: "Hobit"
                }
            ],
            tint: 3
        },
    ]

    const [stores, setStores] = useState(DATA)

    return (
        <Box>
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
                    <Flex>
                        <Button onClick={onSubmit} colorScheme="whatsapp" type='submit'>
                            Сохранить
                        </Button>
                    </Flex>
                </Stack>
            </form>

            <DragDropContext
                onDragEnd={() => {
                    console.log("drag drop event occured")
                }}
            >
                <Droppable droppableId='ROOT' type='group'>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {stores.map((store, index) => (
                                <Draggable key={store.id} index={index} draggableId={store.id}>
                                    {(provided) => (
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                            border={"1px solid #CCCED1"}
                                            borderRadius={"0.375rem"}
                                            padding={"12px 10px"}
                                            bgColor={"white"}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                        >
                                            <DragHandleIcon mr={2} />
                                            <Heading size="sm">{store.name}</Heading>
                                        </Box>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    )
}

export default Admin