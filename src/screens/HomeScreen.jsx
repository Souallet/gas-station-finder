import React from 'react';

import Container from '../components/common/Container';
import StationsList from '../components/stations/StationsList';
import useStationsAPI from '../hooks/useStationsAPI';
import Spinner from '../components/common/Spinner';

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
        setFilters({ ...filters, ...formProps });
        setSearched(true);
    };

    const onLimitChange = async (event) => {
        const newLimit = event.target.value;
        console.log({ start: oldLimit, rows: newLimit - oldLimit });
        await setFilters({ ...filters, start: oldLimit, rows: newLimit - oldLimit });
        await setOldLimit(newLimit);
    };

    const displayStationList = () => {
        return stationsAPI.loading && searched ? (
            <Spinner />
        ) : (
            <>
                <div className="flex justify-between text-lg text-indigo-500 dark:text-indigo-400">
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
        <Container>
            <div className="flex justify-center my-12">
                <SearchingForm onFormSubmit={onSearchSubmit} />
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
