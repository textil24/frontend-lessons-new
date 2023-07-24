import { Box, Image, Heading, Text, Button } from "@chakra-ui/react"

const Course = () => {
    return (
        <Box>
            <Box textAlign={"center"} bgColor={"#F4F6F8"} marginX={"-16px"} paddingX={"16px"}>
                <Image
                    src="https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png"
                    alt='image'
                    borderRadius='lg'
                    width={"100%"}
                />
                <Heading as='h2' size='xl'>
                    JavaScript Fundamental
                </Heading>
                <Text fontSize='md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dignissimos illo ipsam minima explicabo repellat vitae, sequi dolorem aliquid enim aut at fugit voluptate. Ex sequi quibusdam officia odit!
                </Text>
                <Button colorScheme='gray' size='md'>
                    Начать
                </Button>
            </Box>
            <Box>
                <Heading size='md'>
                    Lesson List
                </Heading>
                <Box>
                    <Text fontSize='md'>
                        Введение
                    </Text>
                    <Text fontSize='md'>
                        Переменные
                    </Text>
                    <Text fontSize='md'>
                        Типы данных
                    </Text>
                    <Text fontSize='md'>
                        Циклы for и while
                    </Text>
                </Box>
            </Box>
            <Box>
                <Heading size='md'>
                    This tutorial includes
                </Heading>
                <Box>
                    <Text fontSize='md'>
                        videos (39 min total)
                    </Text>
                    <Text fontSize='md'>
                        multiple choice questions
                    </Text>
                    <Text fontSize='md'>
                        tasks
                    </Text>
                    <Text fontSize='md'>
                        code challenges
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Course