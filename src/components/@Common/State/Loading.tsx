import { Card as CardItem, CardBody, Heading, Stack, Text, Badge, Skeleton, useColorModeValue, Box, Button } from "@chakra-ui/react"
import { FC } from "react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const cards = [1, 2, 3]
const infoElements = [1, 2, 3, 4]

interface ILoading {
    type: "home" | "course-about" | "course-info"
}

const Loading: FC<ILoading> = ({ type }) => {

    switch (type) {
        case "home":
            return (
                cards.map(_ =>
                    <CardItem boxShadow={"rgba(36, 36, 36, 0.07) 0px 1px 12px 2px"}>
                        <CardBody>
                            <Stack spacing={4}>
                                <Skeleton>
                                    <Heading size='md'>
                                        Lorem ipsum
                                    </Heading>
                                </Skeleton>
                                <Skeleton>
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam quisquam nesciunt nisi
                                    </Text>
                                </Skeleton>
                                <Skeleton>
                                    <Stack direction='row'>
                                        <Badge>Category</Badge>
                                    </Stack>
                                </Skeleton>
                            </Stack>
                        </CardBody>
                    </CardItem>
                )
            )
        case "course-about":
            return (
                <>
                    <Skeleton>
                        <Heading as='h2' size='xl'>
                            Lorem ipsum
                        </Heading>
                    </Skeleton>
                    <Skeleton>
                        <Text fontSize='lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dignissimos illo ipsam minima explicabo repellat vitae, sequi dolorem aliquid enim aut at fugit voluptate. Ex sequi quibusdam officia odit!
                        </Text>
                    </Skeleton>
                    <Box mt={5} textAlign={"center"} display={"flex"} justifyContent={"center"}>
                        <Skeleton>
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='whatsapp' size='md'>
                                Lorem ipsum
                            </Button>
                        </Skeleton>
                    </Box>
                </>
            )
        case "course-info":
            return (
                <>
                    <Box>
                        <Heading mb={3} size='md'>
                            Список уроков
                        </Heading>
                        <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                            {infoElements.map(_ =>
                                <Skeleton height="24px">
                                    <Text fontSize='md'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Text>
                                </Skeleton>
                            )}
                        </Stack>
                    </Box>
                    <Box>
                        <Heading mb={3} size='md'>
                            Это учебное пособие
                        </Heading>
                        <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                            {infoElements.map(_ =>
                                <Skeleton height="24px">
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Text>
                                </Skeleton>
                            )}
                        </Stack>
                    </Box>
                </>
            )
        default:
            return null
    }
}

export default Loading

