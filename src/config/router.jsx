import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '../components/header/Navigation';

import HomeScreen from '../screens/HomeScreen';
import FavoritesStationsScreen from '../screens/FavoritesStationsScreen';

function AppRouter() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/favorites" element={<FavoritesStationsScreen />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
