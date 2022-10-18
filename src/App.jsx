import React from 'react';

import { StationsProvider } from './contexts/StationsContext';
import Router from './config/router';
import Hero from './components/header/Hero';

function App() {
    return (
        <StationsProvider>
            <Hero />
            <Router />
        </StationsProvider>
    );
}

export default App;
