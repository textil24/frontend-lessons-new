import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Stack, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import ButtonColorMode from "./ButtonColorMode"
import { Link } from "react-router-dom";

const Header: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box mb={6}>
            <Flex justifyContent="space-between">
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
                                Best Courses
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