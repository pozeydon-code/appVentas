import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { Layout, GridItems } from "@/components";
import { patito, work } from "@/assets/images";
import { Section } from "@/styled-components";
import { ProductoItem } from "./components";

export const Productos = () => {
  return (
    <Layout>
      <Container variant='page-container'>
        <Heading as="h3" fontSize={20} mb={4}>
          Productos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <ProductoItem producto={{ id: 'Producto1', title: 'Producto 1', description: 'prueba descripcion 1', source: patito }} descripcionProducto="Recomendation for our clients" />

          <ProductoItem producto={{ id: 'Producto2', title: 'Producto 2', description: 'prueba descripcion 2', source: work }} descripcionProducto="Recomendation for our sellers" />
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Colaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <GridItems id="margelo" thumbnail={work} title="Margelo">
              This is an example about Colaborations
            </GridItems>

          </Section>
        </SimpleGrid>

      </Container>
    </Layout>
  );
};

export { getServerSideProps } from '@/components/chakra';
