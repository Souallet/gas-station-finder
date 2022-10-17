import React from 'react';

import { StationsProvider } from './contexts/StationsContext';
import StationsList from './components/stations/StationsList';

function App() {
    return (
        <StationsProvider>
            <header className="container mx-auto px-12 py-4">
                <h1 className="text-3xl">Gas Station</h1>
            </header>
            <div className="container mx-auto px-12">
                <StationsList />
            </div>
        </StationsProvider>
    );
}

export default App;
