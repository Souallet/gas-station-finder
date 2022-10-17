import React from 'react';

import Container from '../components/common/Container';
import StationsList from '../components/stations/StationsList';

function FavoritesStationsScreen() {
    return (
        <Container>
            <StationsList filters={{ favorites: true }} />
        </Container>
    );
}

export default FavoritesStationsScreen;
