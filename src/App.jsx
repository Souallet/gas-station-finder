import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { StationsProvider } from './contexts/StationsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Router from './config/router';
import Hero from './components/header/Hero';

function App() {
    return (
        <ChakraProvider>
            <ThemeProvider>
                <StationsProvider>
                    <Hero />
                    <Router />
                </StationsProvider>
            </ThemeProvider>
        </ChakraProvider>
    );
}

export default App;
