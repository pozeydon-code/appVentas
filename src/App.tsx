import { ChakraProvider, Container } from '@chakra-ui/react';
import { NavBar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, ProductoInfo, Productos } from '@/pages';
import theme from './lib/theme';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Container pt={14} variant="page-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Productos/:id' element={<ProductoInfo />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Container>
    </ChakraProvider>
  )
}

export default App
