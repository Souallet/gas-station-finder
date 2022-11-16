import React from 'react';
import { isEqual } from 'lodash';

const isNewSearch = (newSearchParams, oldSearchParams, paramsToExclude = ['start', 'rows']) => {
    const tmpOldSearchParams = structuredClone(oldSearchParams);
    const tmpNewSearchParams = structuredClone(newSearchParams);

    paramsToExclude.forEach((p) => {
        tmpOldSearchParams[p] = 0;
        tmpNewSearchParams[p] = 0;
    });

    return !isEqual(tmpOldSearchParams, tmpNewSearchParams);
};

function useStationsAPI(filters) {
    const [total, setTotal] = React.useState(null);
    const [stations, setStations] = React.useState(null);
    const [loading, setloading] = React.useState(true);
    const [error, seterror] = React.useState('');
    const [filtersUsed, setFiltersUsed] = React.useState({});

    React.useEffect(() => {
        // Si aucun filtres
        if (
            filters &&
            Object.keys(filters).length === 0 &&
            Object.getPrototypeOf(filters) === Object.prototype
        )
            return;

        const searchParams = new URLSearchParams({
            dataset: 'prix-carburants-fichier-instantane-test-ods-copie',
            q: '',
            start: 0,
            rows: 10,
            lang: 'fr',
            facet: [
                'id',
                'adresse',
                'ville',
                'prix_maj',
                'prix_nom',
                'com_arm_name',
                'epci_name',
                'fuel',
                'dep_name',
                'reg_name',
                'services_service',
                'horaires_automate_24_24',
            ],
            timezone: 'Europe/Berlin',
        });

        Object.keys(filters).forEach((key) => {
            const value = filters[key];
            if (value !== '') {
                if (!['favorites', 'q', 'rows', 'start'].includes(key)) {
                    searchParams.set(`refine.${key}`, value);
                } else {
                    searchParams.set(key, filters[key]);
                }
            }
        });

        const searchParamsObject = Object.fromEntries(searchParams);
        const newSearch = isNewSearch(searchParamsObject, filtersUsed);

        const url = `https://data.economie.gouv.fr/api/records/1.0/search/?${searchParams}`;

        const nbDisplayed = !newSearch && stations?.length > 0 ? stations?.length : 0;
        const nbToDisplay =
            parseInt(searchParamsObject.rows, 10) + parseInt(searchParamsObject.start, 10);

        if (nbToDisplay && nbDisplayed > nbToDisplay) {
            setStations(stations.slice(0, 0 - (stations.length - nbToDisplay)));
            setloading(false);
            setFiltersUsed(searchParamsObject);
        } else {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    let newStationsList = data?.records ?? [];

                    if (searchParamsObject.start > 0 && !newSearch) {
                        newStationsList = newStationsList.concat(stations);
                    }

                    setFiltersUsed(searchParamsObject);
                    seterror(data.error);
                    setStations(newStationsList);
                    setTotal(data?.nhits ?? 0);
                    setloading(false);
                });
        }
    }, [filters]);

    return { stations, total, loading, error, filtersUsed };
}

export default useStationsAPI;
