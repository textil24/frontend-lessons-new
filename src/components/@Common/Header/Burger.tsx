import { ArrowBackIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom";
import { IGetLesson } from "../../../apollo/types";
import Loading from "../State/Loading";

interface IBurger {
    lesson?: IGetLesson
    loading?: boolean
}

const Burger: FC<IBurger> = ({ loading, lesson }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box order={"1"}>
            <Flex>
                <Button padding={0} bgColor={"transparent"} onClick={onOpen}>
                    <HamburgerIcon />
                </Button>
            </Flex>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottomWidth="1px">
                        {loading && <Loading type="burger-heading" />}
                        <Link to={"/courses/" + lesson?.getLesson.course.id}>
                            <Button leftIcon={<ArrowBackIcon />} onClick={() => onClose()} mr={2} >
                                {/* {lesson?.getLesson.course.name} */}
                                Страница курса
                            </Button>
                        </Link>
                        <Button onClick={() => onClose()} >
                            <CloseIcon />
                        </Button>
                    </DrawerHeader>
                    <DrawerBody onClick={() => onClose()}>
                        {loading && <Loading type="burger-items" />}
                        <Stack spacing={2}>
                            {lesson?.getLesson.course.lessons.map(({ id, name }, index) =>
                                <Link key={id} onClick={() => onClose()} to={"/lessons/" + id}>
                                    <Heading fontWeight={"normal"} as='h5' size='sm'>
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