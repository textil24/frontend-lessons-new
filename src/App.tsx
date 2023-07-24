import { Box, Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lesson from "./pages/Lesson"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Course from "./pages/Course"

const App = () => {
  return (
    <Container my={4} maxW='1200'>
      <Header />
      <Box marginTop={"90px"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/lesson" element={<Lesson />} />
        </Routes>
      </Box>
      <Footer />
    </Container>
  )
}

export default App