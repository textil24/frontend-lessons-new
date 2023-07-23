import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ButtonNavigation = () => {
    return (
        <Flex
            mt={4}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Link to={"/"}>
                <Button leftIcon={<ArrowBackIcon />} colorScheme='gray'>
                    Предыдущий
                </Button>
            </Link>
            <Link to={"/"}>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='gray'>
                    Следующий
                </Button>
            </Link>
        </Flex>
    )
}

export default ButtonNavigation