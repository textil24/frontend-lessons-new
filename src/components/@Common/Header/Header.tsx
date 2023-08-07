import { ArrowBackIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import ButtonColorMode from "./ButtonColorMode"
import { Link } from "react-router-dom";
import { IGetLesson } from "../../../apollo/types";
import Loading from "../State/Loading";

interface IHeader {
    lesson?: IGetLesson
    loading?: boolean
    type: "home" | "course" | "lesson"
}

const Header: FC<IHeader> = ({ type, lesson, loading }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('white', '#1A202C')

    return (
        <Box mb={6} position={"fixed"} top={"0"} right={"0"} width={"100%"} zIndex={999} px={"16px"} py={"16px"} bgColor={bgColor} boxShadow='md'>
            <Grid alignItems={"center"} templateColumns='48px 1fr 48px'>
                {type === "home" && (
                    <Box order={"1"}></Box>
                )}
                {type === "course" && (
                    <Link to={"/"}>
                        <Box order={"1"}>
                            <Button onClick={onOpen}>
                                <ArrowBackIcon />
                            </Button>
                        </Box>
                    </Link>
                )}
                {type === "lesson" && (
                    <Box order={"1"}>
                        <Flex>
                            <Button onClick={onOpen}>
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
                )}
                <Heading display={"flex"} justifyContent={"center"} fontFamily={"monospace"} order={"2"} textAlign="center" size='lg'>
                    <span style={{ color: "#22C35E" }}>nexign&lt;</span>academy<span style={{ color: "#22C35E" }}>&gt;</span>
                </Heading>
                <ButtonColorMode />
            </Grid>
        </Box>
    );
};

export default Header;