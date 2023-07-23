import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Lesson from "./pages/Lesson"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Container my={4} maxW='1200'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
      <Footer />  
    </Container>
  )
}

export default App
