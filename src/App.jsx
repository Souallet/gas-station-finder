import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { StationsProvider } from './contexts/StationsContext';
import Router from './config/router';

function App() {
    return (
        <ChakraProvider>
            <StationsProvider>
                <Router />
            </StationsProvider>
        </ChakraProvider>
    );
}

export default App;
