import React from 'react';

import { Container } from '@chakra-ui/react';
import { useStationsContext } from '../contexts/StationsContext';

import StationsList from '../components/stations/StationsList';

function FavoritesStationsScreen() {
    const stationsContext = useStationsContext();
    const [stations, setStations] = React.useState([]);

    React.useEffect(() => {
        setStations(stationsContext.state.favorites);
    }, [stationsContext.state.favorites]);

    return (
        <Container maxW="container.xl">
            <StationsList stations={stations} />
        </Container>
    );
}

export default FavoritesStationsScreen;
