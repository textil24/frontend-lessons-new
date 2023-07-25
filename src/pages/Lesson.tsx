import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react"
import ButtonNavigation from "../components/ButtonNavigation"
import Prism from "../components/Prism"
import Monaco from "../components/Monaco"
import AnswerSelector from "../components/AnswerSelector"
import Breadcrumb from "../components/Breadcrumb"
import Header from "../components/Header"

const Lesson = () => {

    return (
        <Box>
            <Header type="lesson"/>
            <Breadcrumb/>
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
                <Image
                    sizes={"100%"}
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov' />
                <AnswerSelector />
                <Prism code="let val = 666;" />
                <Monaco code={["let val = 666;"]} />
            </Stack>
            <ButtonNavigation />
        </Box>
    )
}

export default Lesson