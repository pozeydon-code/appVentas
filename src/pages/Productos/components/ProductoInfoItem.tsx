import { Producto } from '@/models';
import {
  Box,
  Text,
  SimpleGrid,
  Container
} from '@chakra-ui/react';

export const ProductoInfoItem = ({ producto }: { producto: Producto }) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} mt={6}>
      <Box>
        <img
          src={producto.source}
          alt={producto.title}
          className="grid-item-thumbnail"
        />
      </Box>
      <Box justifyItems="center" alignContent="center">
        <Text fontSize={20}>{producto.title}</Text>
        <Text fontSize={14}>{producto.description}</Text>
      </Box>
    </SimpleGrid >
  );
};
