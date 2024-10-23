import { work } from '@/assets/images';
import {
  Box,
  Text,
  SimpleGrid
} from '@chakra-ui/react';

export const ItemProducto = ({ title, descripcion }: { title: string, descripcion: string }) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={10} mt={6}>
      <Box w="100%" display="flex" justifyContent="center">
        <img
          src={work}
          alt={title}
          className="grid-item-thumbnail"
        />
      </Box>
      <Box justifyItems="center" alignContent="center">
        <Text fontSize={20}>{title}</Text>
        <Text fontSize={14}>{descripcion}</Text>
      </Box>
    </SimpleGrid >
  );
};
