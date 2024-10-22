import { ChakraProvider, Container } from '@chakra-ui/react';
import { NavBar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Works } from '@/pages';
import theme from './lib/theme';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Container maxW="container.md" pt={14}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ChakraProvider>
  )
}

export default App
