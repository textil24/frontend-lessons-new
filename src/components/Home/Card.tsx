import { Card as CardItem, CardBody, Heading, Stack, Text, Badge } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface ICard {
    id: string
    name: string
    // category: string
    preview: string
}

const Card: FC<ICard> = ({ id, name, preview }) => {
    return (
        <Link to={"/courses/" + id}>
            <CardItem boxShadow={"rgba(36, 36, 36, 0.07) 0px 1px 12px 2px"}>
                <CardBody>
                    <Stack spacing={4}>
                        <Heading size='md'>
                            {name}
                        </Heading>
                        <Text>
                            {preview}
                        </Text>
                        <Stack direction='row'>
                            <Badge>Курс</Badge>
                        </Stack>
                    </Stack>
                </CardBody>
            </CardItem>
        </Link>
    )
}

export default Card