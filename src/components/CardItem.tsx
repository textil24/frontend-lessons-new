import { Button, Card, CardBody, Heading, Stack, Image, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface ICardItem {
    image: string
    title: string
}

const CardItem: FC<ICardItem> = ({ image, title }) => {
    return (
        <Card>
            <CardBody>
                <Stack spacing={4}>
                    <Image
                        src={image}
                        alt='image'
                        borderRadius='lg'
                    />
                    <Heading size='md'>
                        {title}
                    </Heading>
                    <Flex>
                        <Link to={"/lesson"}>
                            <Button variant='solid' colorScheme='gray'>
                                Войти
                            </Button>
                        </Link>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardItem