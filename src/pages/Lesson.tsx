import { Box, Button, Heading, Stack, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { ArrowBackIcon } from "@chakra-ui/icons"
import ButtonNavigation from "../components/ButtonNavigation"
import Prism from "../components/Prism"
import Monaco from "../components/Monaco"

const Lesson = () => {

    return (
        <Box>
            <Link to={"/"}>
                <Button
                    leftIcon={<ArrowBackIcon />}
                    colorScheme='gray'
                >
                    Вернуться
                </Button>
            </Link>
            <Heading mt={2} as='h2' size='2xl'>
                Введение
            </Heading>
            <Stack spacing={2}>
                <Heading as='h2' size='xl'>
                    qwe
                </Heading>
                <Text fontSize='md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis possimus reprehenderit illum, doloremque atque totam. Iste, enim natus? Illo mollitia doloremque itaque maiores. At libero aspernatur recusandae omnis non.
                </Text>
                <Heading as='h2' size='xl'>
                    qwe
                </Heading>
                <Image
                    sizes={"100%"}
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov' />
                <Text fontSize='md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis possimus reprehenderit illum, doloremque atque totam. Iste, enim natus? Illo mollitia doloremque itaque maiores. At libero aspernatur recusandae omnis non.
                </Text>
                <Prism code="let val = 666;"/>
                <Monaco code={["let val = 666;"]}/>
            </Stack>
            <ButtonNavigation />
        </Box>
    )
}

export default Lesson