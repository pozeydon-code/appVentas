import {
  Container,
  Box,
  Heading,
  Divider,
  Button,
  Text
} from '@chakra-ui/react';
import { NavLink, useParams } from 'react-router-dom';
import { ProductoInfoItem } from './components';
import { Layout } from '@/components';
import { patito, work } from '@/assets/images';

const productos = [
  { id: 'Producto1', title: 'Laptop', description: 'Una laptop Potente', source: work },
  { id: 'Producto2', title: 'Monitor', description: 'Monitor de alta resolucion', source: patito },
];

export const ProductoInfo = () => {

  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === id);

  if (!producto) {
    return (

      <Container>
        <Heading as="h1"> Producto No Encontrado</Heading>
        <Text>El producto que estas buscando no se ha encontrado</Text>
        <Divider my={6} />
        <Box my={6} alignItems="center">
          <Button as={NavLink} to='/' colorScheme='teal'>Regresar al Inicio</Button>
        </Box>
      </Container>
    );
  }

  return (
    <Layout>
      <Container variant="page-container">
        <ProductoInfoItem producto={producto} />
      </Container>
    </Layout>

  )
}
