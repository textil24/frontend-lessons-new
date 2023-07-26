import { ArrowBackIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import ButtonColorMode from "./ButtonColorMode"
import { Link } from "react-router-dom";

interface IHeader {
    type: "home" | "course" | "lesson"
}

const Header: FC<IHeader> = ({ type }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('white', '#1A202C')

    return (
        <Box mb={6} position={"fixed"} top={"0"} right={"0"} width={"100%"} zIndex={999} px={"16px"} py={"16px"} bgColor={bgColor} boxShadow='md'>
            <Grid templateColumns='48px 1fr 48px'>
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
                                    <Link to={"/course"}>
                                        <Button leftIcon={<ArrowBackIcon />} onClick={() => onClose()} mr={2} >
                                            JavaScript Fundamental
                                        </Button>
                                    </Link>
                                    <Button onClick={() => onClose()} >
                                        <CloseIcon />
                                    </Button>
                                </DrawerHeader>
                                <DrawerBody onClick={() => onClose()}>
                                    <Stack spacing={2}>
                                        <Link onClick={() => onClose()} to={"/lesson"}>
                                            <Heading as='h4' size='md'>
                                                Введение
                                            </Heading>
                                        </Link>
                                        <Link onClick={() => onClose()} to={"/lesson"}>
                                            <Heading as='h4' size='md'>
                                                Переменные
                                            </Heading>
                                        </Link>
                                        <Link onClick={() => onClose()} to={"/lesson"}>
                                            <Heading as='h4' size='md'>
                                                Тип данных
                                            </Heading>
                                        </Link>
                                        <Link onClick={() => onClose()} to={"/lesson"}>
                                            <Heading as='h4' size='md'>
                                                Циклы
                                            </Heading>
                                        </Link>
                                    </Stack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                )}
                <Heading order={"2"} textAlign="center" bgGradient="linear(to-l, #FF4E50, #F9D423)" bgClip="text">
                    Best Courses
                </Heading>
                <ButtonColorMode />
            </Grid>
        </Box>
    );
};

export default Header;