import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Link as ChakraLink,
    Container,
    Heading,
    Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AppRoutes from '../config/routes';

function NavLink({ children }) {
    return (
        <Box
            as="a"
            px={2}
            py={2}
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href="#"
        >
            {children}
        </Box>
    );
}

NavLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default function Navigation() {
    const { colorMode, toggleColorMode } = useColorMode();

    const displayLinks = (route) => {
        return (
            <ChakraLink
                as={ReactRouterLink}
                to={route.path}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <NavLink>{route.label}</NavLink>
            </ChakraLink>
        );
    };

    return (
        <Box px={4}>
            <Container maxW="container.xl">
                <Flex h={20} alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" gap={4}>
                        <Image src="/logo192.png" alt="Logo GSF" h={10} w={10} />
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            letterSpacing="widest"
                            color="cyan.300"
                        >
                            GSF
                        </Heading>
                    </Flex>

                    <Flex alignItems="center" gap={4}>
                        {AppRoutes.map((ar) => displayLinks(ar))}
                        <Stack direction="row" spacing={7}>
                            <Button variant="ghost" onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
