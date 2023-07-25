import { Card as CardItem, CardBody, Heading, Stack, Text, Badge } from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "react-router-dom"

interface ICard {
    title: string
}

const Card: FC<ICard> = ({ title }) => {
    return (
        <Link to={"/course"}>
            <CardItem boxShadow={"rgba(36, 36, 36, 0.07) 0px 1px 12px 2px"}>
                <CardBody>
                    <Stack spacing={4}>
                        <Heading size='md'>
                            {title}
                        </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam quisquam nesciunt nisi
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