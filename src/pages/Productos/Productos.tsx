import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { Layout, GridItems } from "@/components";
import { work } from "@/assets/images";
import { Section } from "@/styled-components";

export const Productos = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Productos
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItems id="Producto1" title="Producto 1" thumbnail={work}>
              Producto 1 - Recommendation for our clients.
            </GridItems>
          </Section>
          <Section>
            <GridItems id="Producto2" title="Producto 2" thumbnail={work}>
              Producto 2 - Recommendation for our sellers.
            </GridItems>
          </Section>
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
