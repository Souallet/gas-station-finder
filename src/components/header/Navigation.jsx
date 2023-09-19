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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AppRoutes from '../../config/routes';

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
            <ChakraLink as={ReactRouterLink} to={route.path}>
                <NavLink>{route.label}</NavLink>
            </ChakraLink>
        );
    };

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <Box>GSF</Box>

                    <Flex alignItems="center" gap={4}>
                        {AppRoutes.map((ar) => displayLinks(ar))}
                        <Stack direction="row" spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
