import { Box, Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Course, Home, Lesson } from "./pages"

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />
  },
  {
    id: 2,
    path: "/course",
    element: <Course />
  },
  {
    id: 3,
    path: "/lesson",
    element: <Lesson />
  }
]

const App = () => {
  return (
    <Container my={4} maxW='1200'>
      <Box marginTop={"90px"} paddingBottom={"50px"}>
        <Routes>
          {routes.map(({ id, path, element }) =>
            <Route key={id} path={path} element={element} />
          )}
        </Routes>
      </Box>
    </Container>
  )
}

export default App
