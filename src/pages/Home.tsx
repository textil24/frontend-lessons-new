import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react"
import { useEffect } from "react"
import { Header, Loading } from "../components/@Common"
import { Card } from "../components/Home"
import { GET_COURSES } from "../apollo/home"
import { useQuery } from "@apollo/client"

const cards = [
    {
        id: 1,
        title: "JavaScript Fundamental"
    }
]

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="home" />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Loading type="home"/>
                {/* {cards.map(({ id, title }) =>
                    <Card key={id} title={title} />
                )} */}
            </SimpleGrid>
        </Box >
    )
}

export default Home