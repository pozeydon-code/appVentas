import { work } from '@/assets/images';
import {
  Box,
  Text,
  SimpleGrid,
  Container
} from '@chakra-ui/react';

export const ItemProducto = ({ title, descripcion, source }: { title: string, descripcion: string, source: string }) => {
  return (
    <Container>
      <SimpleGrid columns={[1, 1, 2]} gap={10} mt={6}>
        <Box w="50vw" display="flex" justifyContent="center">
          <img
            src={source}
            alt={title}
            className="grid-item-thumbnail"
          />
        </Box>
        <Box justifyItems="center" alignContent="center">
          <Text fontSize={20}>{title}</Text>
          <Text fontSize={14}>{descripcion}</Text>
        </Box>
      </SimpleGrid >
    </Container>
  );
};
