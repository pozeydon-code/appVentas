import { Box, Button, Container, Flex, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { GridItems, Layout } from '@/components';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { patito, work } from "@/assets/images";
import { BioSection, BioYear, Paragraph, Section } from "@/styled-components";

export const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('gray.200', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(20px)' }}
        >
          Hola, bienvenido a la mejor pagina de ventas.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              TechEnterprise
            </Heading>
            <p>Distribuidores autorizados de los mejores productos en el mercado</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <img
                src={patito}
                alt="Profile Image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Productos
          </Heading>
          <Paragraph>
            Puedes encontrar todos los productos solo dando clic en el siguiente boton.
          </Paragraph>
          <Flex justifyContent="center" my={4}>
            <Button
              as={ReactRouterLink}
              to="/Productos"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              Productos
            </Button>
          </Flex>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Product 1</BioYear>
            Specifies about your product 1
          </BioSection>
          <BioSection>
            <BioYear>Product 2</BioYear>
            Specifies about your product 2
          </BioSection>
          <BioSection>
            <BioYear>Product 3</BioYear>
            Specifies about your product 3
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Productos más populares.
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <GridItems id="trabajo1" title="trabajo1" thumbnail={work}>
                Work 1 - Recommendation for our clients.
              </GridItems>
            </Section>
            <Section>
              <GridItems id="trabajo2" title="trabajo2" thumbnail={work}>
                Work 2 - Recommendation for our sellers.
              </GridItems>
            </Section>
          </SimpleGrid>
        </Section>
      </Container >
    </Layout>
  );
}

export { getServerSideProps } from '@/components'
