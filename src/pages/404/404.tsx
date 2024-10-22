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
      <Heading as="h1"> Not Found</Heading>
      <Text>The page you're looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} alignItems="center">
        <Button as={NavLink} to='/' colorScheme='teal'>Return to Home</Button>
      </Box>
    </Container>
  )
}
