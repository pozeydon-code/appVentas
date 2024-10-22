import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { Layout, Section, WorkGridItem } from "@/components";
import { work } from "@/assets/images";

export const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="trabajo1" title="trabajo1" thumbnail={work}>
              Work 1 - Recommendation for our clients.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="trabajo2" title="trabajo2" thumbnail={work}>
              Work 2 - Recommendation for our sellers.
            </WorkGridItem>
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
            <WorkGridItem id="margelo" thumbnail={work} title="Margelo">
              This is an example about Colaborations
            </WorkGridItem>

          </Section>
        </SimpleGrid>

      </Container>
    </Layout>
  );
};

export { getServerSideProps } from '@/components/chakra';
