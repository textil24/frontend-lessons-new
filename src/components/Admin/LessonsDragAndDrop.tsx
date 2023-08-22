import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { DragHandleIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";

const LessonsDragAndDrop = () => {

    const DATA = [
        {
            id: "1",
            name: "Walmart"
        },
        {
            id: "2",
            name: "Indigo"
        },
        {
            id: "3",
            name: "Lowes"
        },
    ]

    const [stores, setStores] = useState(DATA)

    const handleDragDrop = (results: any) => {
        const { source, destination, type } = results

        if (!destination) return

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return

        if (type === "group") {
            const reorderedStores = [...stores]
            const sourceIndex = source.index
            const destinationIndex = destination.index

            const [removedStore] = reorderedStores.splice(sourceIndex, 1)
            reorderedStores.splice(destinationIndex, 0, removedStore)

            return setStores(reorderedStores)
        }

    }

    return (
        <Stack>

            <Heading size={"sm"}>
                Список уроков:
            </Heading>

            <DragDropContext
                onDragEnd={handleDragDrop}
            >
                <Droppable droppableId='ROOT' type='group'>
                    {(provided) => (
                        <Stack
                            height={`${stores.length - 1 * 56}px`}
                            spacing={2}
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
                                            <Heading size="sm">Урок {index + 1}. {store.name}</Heading>
                                        </Box>
                                    )}
                                </Draggable>
                            ))}
                        </Stack>
                    )}
                </Droppable>
            </DragDropContext>

            <Flex mt={4} direction="column">
                <Button onClick={() => setStores([...stores, { id: `${stores.length + 1}`, name: "Название" }])}>
                    Добавить новый урок
                </Button>
            </Flex>
        </Stack>
    )
}

export default LessonsDragAndDrop