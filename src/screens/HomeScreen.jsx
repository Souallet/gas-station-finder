import React from 'react';

import { Container, Spinner } from '@chakra-ui/react';
import StationsList from '../components/stations/StationsList';
import useStationsAPI from '../hooks/useStationsAPI';

import SearchingForm from '../components/forms/SearchingForm';
import Select from '../components/common/Select';

function HomeScreen() {
    const limitOptionsBase = React.useMemo(
        () => [
            {
                id: 10,
                value: 10,
                selected: false,
            },
            {
                id: 20,
                value: 20,
                selected: false,
            },
            {
                id: 30,
                value: 30,
                selected: false,
            },
            {
                id: 40,
                value: 40,
                selected: false,
            },
            {
                id: 50,
                value: 50,
                selected: false,
            },
        ],
        [],
    );

    const [filters, setFilters] = React.useState({});
    const [searched, setSearched] = React.useState(false);
    const [limitOptions, setLimitOptions] = React.useState(limitOptionsBase);
    const [oldLimit, setOldLimit] = React.useState(limitOptionsBase[0].value);

    const stationsAPI = useStationsAPI(filters);

    const onSearchSubmit = (e) => {
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const moduloLimit = oldLimit % 10;
        const newRows = moduloLimit === 0 ? oldLimit : oldLimit - moduloLimit;

        setFilters({ ...filters, ...formProps, start: 0, rows: newRows });
        setSearched(true);
    };

    const onLimitChange = async (event) => {
        const newLimit = event.target.value;
        await setFilters({ ...filters, start: oldLimit, rows: newLimit - oldLimit });
        await setOldLimit(newLimit);
    };

    const displayStationList = () => {
        return stationsAPI.loading && searched ? (
            <Spinner size="xl" />
        ) : (
            <>
                <div>
                    <span>Nombre de résultat(s) : {stationsAPI?.total}</span>
                    <Select
                        id="limit"
                        name="limit"
                        options={limitOptions}
                        onChange={onLimitChange}
                    />
                </div>
                <StationsList stations={stationsAPI?.stations ?? []} />
            </>
        );
    };

    React.useEffect(() => {
        let options = limitOptionsBase.filter((l) => l.id <= stationsAPI?.total);

        if (options.length > 0)
            options = options.map((o) =>
                o.id === stationsAPI?.total ? { ...o, selected: true } : o,
            );

        options.push({
            value: stationsAPI?.total,
            id: 'Tous',
            selected: options.length === 0,
        });

        setLimitOptions(options);
    }, [limitOptionsBase, stationsAPI?.total]);

    return (
        <Container maxW="container.xl">
            <div>
                <SearchingForm onFormSubmit={onSearchSubmit} />
            </div>

            {searched ? (
                displayStationList()
            ) : (
                <p>Lancer une recherche pour trouver une station à proximité</p>
            )}
        </Container>
    );
}

export default HomeScreen;
