import { NavLink, Link as ReactRouterLink, useLocation } from 'react-router-dom'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ThemeToggleButton } from './ThemeToggleButton';
import { ReactNode } from 'react';
import { Logo } from '../Logo';

export const LinkItem = ({ to, children, ...props }: { to: string, children: ReactNode, }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <Link
      as={NavLink}
      to={to}
      p={2}
      borderRadius={10}
      bg={isActive ? 'grassTeal' : undefined}
      color={isActive ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link >
  )
}

export const NavBar = () => {

  return (
    <Box
      position='fixed'
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
      >
        <Flex textAlign="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to="/">
            Inicio
          </LinkItem>
          <LinkItem to="/Productos">
            Productos
          </LinkItem>
          <LinkItem to="/Blogs">
            Blogs
          </LinkItem>
          <LinkItem to="/Ubicanos">
            Ubicanos
          </LinkItem>
        </Stack>

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NavLink} to='/'>
                  Inicio
                </MenuItem>

                <MenuItem as={NavLink} to='/Productos'>
                  Productos
                </MenuItem>

                <MenuItem as={NavLink} to='/Blogs'>
                  Blogs
                </MenuItem>

                <MenuItem as={NavLink} to='/Ubicanos'>
                  Ubicanos
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

