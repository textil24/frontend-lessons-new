import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import ButtonColorMode from "./ButtonColorMode"
import { Link } from "react-router-dom";

const Header: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue('white', '#1A202C')

    return (
        <Box mb={6} position={"fixed"} top={"0"} right={"0"} width={"100%"} zIndex={999} px={"16px"} py={"16px"} bgColor={"white"} boxShadow='md'>
            <Flex display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Flex>
                        <Button onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>
                    </Flex>
                    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth="1px">
                                JavaScript Fundamental
                            </DrawerHeader>
                            <DrawerBody>
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
                <Heading textAlign="center" bgGradient="linear(to-l, #FF4E50, #F9D423)" bgClip="text">
                    Best Courses
                </Heading>
                <ButtonColorMode />
            </Flex>
        </Box>
    );
};

export default Header;