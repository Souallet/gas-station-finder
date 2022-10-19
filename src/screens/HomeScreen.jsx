import React from 'react';

import Container from '../components/common/Container';
import StationsList from '../components/stations/StationsList';
import SearchBar from '../components/common/SearchBar';
import useStationsAPI from '../hooks/useStationsAPI';
import Spinner from '../components/common/Spinner';
import Accordion from '../components/common/Accordion';

function HomeScreen() {
    const [filters, setFilters] = React.useState({});
    const [stations, setStations] = React.useState([]);
    const [searched, setSearched] = React.useState(false);

    const stationsAPI = useStationsAPI(filters);

    const onSearchBarSubmit = (e) => {
        const searchedCity = e.target[0].value;
        setFilters({ ...filters, com_name: searchedCity });
        setSearched(true);
    };

    const displayStationList = () => {
        return stationsAPI.loading && searched ? <Spinner /> : <StationsList stations={stations} />;
    };

    React.useEffect(() => {
        setStations(stationsAPI.stations ?? []);
    }, [stationsAPI.stations]);

    return (
        <Container>
            <div className="flex justify-center my-12">
                <SearchBar onFormSubmit={onSearchBarSubmit} />
            </div>
            <div className="flex justify-center my-4">
                <Accordion title="Plus de critères de recherche">SearchForm</Accordion>
            </div>
            {searched ? (
                displayStationList()
            ) : (
                <p className="text-indigo-500 font-semibold text-3xl tracking-wide text-center w-full mt-24">
                    Lancer une recherche pour trouver une station à proximité
                </p>
            )}
        </Container>
    );
}

export default HomeScreen;
