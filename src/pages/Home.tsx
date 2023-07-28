import { Box, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { Header, Loading, Error } from "../components/@Common"
import { Card } from "../components/Home"
import { GET_COURSES } from "../apollo/home"
import { useQuery } from "@apollo/client"
import { IGetCourses } from "../apollo/types"

// const cards = [
//     {
//         id: 1,
//         title: "JavaScript Fundamental"
//     }
// ]

const Home = () => {

    const { data: cards, loading, error } = useQuery<IGetCourses>(GET_COURSES)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box>
            <Header type="home" />
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {error && <Error />}
                {loading && <Loading type="home" />}
                {cards && cards?.getCourses.map(({ id, name, preview }) =>
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        preview={preview}
                    />
                )}
            </SimpleGrid>
        </Box >
    )
}

export default Home