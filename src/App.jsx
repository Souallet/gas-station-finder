import React from 'react';

import { StationsProvider } from './contexts/StationsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Router from './config/router';
import Hero from './components/header/Hero';

function App() {
    return (
        <ThemeProvider>
            <StationsProvider>
                <div className="bg-white dark:bg-slate-900 min-h-[100vh]">
                    <Hero />
                    <Router />
                </div>
            </StationsProvider>
        </ThemeProvider>
    );
}

export default App;
