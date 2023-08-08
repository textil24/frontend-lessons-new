import { ArrowBackIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom";
import { IGetLesson } from "../../../apollo/types";
import Loading from "../State/Loading";
import { Account } from "..";
import Burger from "./Burger";

interface IHeader {
    lesson?: IGetLesson
    loading?: boolean
    type: "home" | "course" | "lesson"
}

const Header: FC<IHeader> = ({ type, lesson, loading }) => {

    const bgColor = useColorModeValue('white', '#1A202C')

    return (
        <Box mb={6} position={"fixed"} top={"0"} right={"0"} width={"100%"} zIndex={999} px={"16px"} py={"16px"} bgColor={bgColor} boxShadow='md'>
            <Grid alignItems={"center"} templateColumns={`48px 1fr ${type === "lesson" ? "72px" : "32px"}`}>
                {type === "home" && (
                    <Box order={"1"} height={"40px"}></Box>
                )}
                {type === "course" && (
                    <Link to={"/"}>
                        <Box order={"1"}>
                            <Button>
                                <ArrowBackIcon />
                            </Button>
                        </Box>
                    </Link>
                )}
                {type === "lesson" && (
                    <Link to={"/courses/" + lesson?.getLesson.course.id}>
                        <Box order={"1"}>
                            <Button>
                                <ArrowBackIcon />
                            </Button>
                        </Box>
                    </Link>
                )}
                <Heading paddingLeft={"10px"} display={"flex"} justifyContent={"center"} fontFamily={"monospace"} order={"2"} textAlign="center" size='lg'>
                    <span style={{ color: "#22C35E" }}>nexign&lt;</span>academy<span style={{ color: "#22C35E" }}>&gt;</span>
                </Heading>
                <Flex order={"3"} justifyContent={"flex-end"} >
                    {type === "lesson" && (
                        <Box mr={1}>
                            <Burger lesson={lesson} loading={loading} />
                        </Box>
                    )}
                    <Account />
                </Flex>
            </Grid>
        </Box>
    );
};

export default Header;