import { Button, Card as CardItem, CardBody, Heading, Stack, Text, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface ICard {
    image: string
    title: string
}

const Card: FC<ICard> = ({ image, title }) => {
    return (
        <CardItem>
            <CardBody>
                <Stack spacing={4}>
                    {/* <Image
                        src={image}
                        alt='image'
                        borderRadius='lg'
                    /> */}
                    <Text fontSize={"lg"}>
                        Курс
                    </Text>
                    <Heading size='md'>
                        {title}
                    </Heading>
                    <Flex>
                        <Link to={"/course"}>
                            <Button variant='solid' colorScheme='gray'>
                                Войти
                            </Button>
                        </Link>
                    </Flex>
                </Stack>
            </CardBody>
        </CardItem>
    )
}

export default Card