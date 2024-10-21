import { ChakraProvider, Container } from '@chakra-ui/react';
import { NavBar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <Container maxW="container.md" pt={14}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </ChakraProvider>
  )
}

export default App
