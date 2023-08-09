import { ArrowBackIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Stack, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom";
import { IGetLesson } from "../../../apollo/types";
import Loading from "../State/Loading";
import { Icon } from '@iconify/react';

interface IBurger {
    lesson?: IGetLesson
    loading?: boolean
}

const Burger: FC<IBurger> = ({ loading, lesson }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const currentLesson = lesson?.getLesson.orderBy

    return (
        <Box>
            <Flex>
                <Button onClick={onOpen}>
                    <Icon icon="lucide:list" />
                </Button>
            </Flex>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottomWidth="1px">
                        {loading && <Loading type="burger-heading" />}
                        <Link to={"/courses/" + lesson?.getLesson.course.id}>
                            <Button onClick={() => onClose()} mr={2} >
                                <ArrowBackIcon />
                            </Button>
                        </Link>
                        <Button onClick={() => onClose()} >
                            <SmallCloseIcon />
                        </Button>
                    </DrawerHeader>
                    <DrawerBody onClick={() => onClose()}>
                        {loading && <Loading type="burger-items" />}
                        <Stack spacing={2}>
                            {lesson?.getLesson.course.lessons.map(({ id, name }, index) =>
                                <Link key={id} onClick={() => onClose()} to={"/lessons/" + id}>
                                    <Heading fontWeight={currentLesson === (index + 1) ? "bold" : "normal"} as='h5' size='sm'>
                                        {index + 1}. {name}
                                    </Heading>
                                </Link>
                            )}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Burger