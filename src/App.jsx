import React from 'react';

import { StationsProvider } from './contexts/StationsContext';
import Router from './config/router';

function App() {
    return (
        <StationsProvider>
            <header className="container mx-auto px-12 py-4">
                <h1 className="text-3xl">Gas Station</h1>
            </header>
            <Router />
        </StationsProvider>
    );
}

export default App;
