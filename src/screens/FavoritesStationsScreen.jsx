import React from 'react';

import { useStationsContext } from '../contexts/StationsContext';

import Container from '../components/common/Container';
import StationsList from '../components/stations/StationsList';

function FavoritesStationsScreen() {
    const stationsContext = useStationsContext();
    const [stations, setStations] = React.useState([]);

    React.useEffect(() => {
        setStations(stationsContext.state.favorites);
    }, [stationsContext.state.favorites]);

    return (
        <Container>
            <StationsList stations={stations} />
        </Container>
    );
}

export default FavoritesStationsScreen;
