import { Box, SimpleGrid } from "@chakra-ui/react"
import Card from "../components/Card"
import Header from "../components/Header"

const cardsItems = [
    {
        id: 1,
        title: "JavaScript Fundamental"
    }
]

const Home = () => {
    return (
        <Box>
            <Header type="home" />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {cardsItems.map(({ id, title }) =>
                    <Card key={id} title={title} />
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Home