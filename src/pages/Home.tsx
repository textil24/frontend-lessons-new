import { Box, SimpleGrid } from "@chakra-ui/react"
import CardItem from "../components/CardItem"

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
                    <CardItem key={id} image={image} title={title} />
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Home