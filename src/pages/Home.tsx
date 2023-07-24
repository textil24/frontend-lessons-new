import { Box, SimpleGrid } from "@chakra-ui/react"
import Card from "../components/Card"

const cardsItems = [
    {
        id: 1,
        image: "https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png",
        title: "JavaScript Fundamental"
    }
]

const Home = () => {
    return (
        <Box>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {cardsItems.map(({ id, image, title }) =>
                    <Card key={id} image={image} title={title} />
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Home