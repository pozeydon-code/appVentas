import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container>
      <Heading as="h1"> Pagina No Encontrada</Heading>
      <Text>La pagina que estas buscando no se ha encontrado</Text>
      <Divider my={6} />
      <Box my={6} alignItems="center">
        <Button as={NavLink} to='/' colorScheme='teal'>Regresar al Inicio</Button>
      </Box>
    </Container>
  )
}
