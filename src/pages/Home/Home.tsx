import { Box, Button, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { Section, Paragraph, BioSection, BioYear, Layout } from '@/components';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { patito } from "@/assets/images";

export const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, this is my example page web
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Francisco Herrera
            </Heading>
            <p>Web Developer</p>
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
            Work
          </Heading>
          <Paragraph>
            Here you can write some information abour yourself.
          </Paragraph>
          <Box alignItems="center" my={4}>
            <Button
              as={ReactRouterLink}
              to="/works"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Work
            </Button>
          </Box>
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
      </Container >
    </Layout>
  );
}
