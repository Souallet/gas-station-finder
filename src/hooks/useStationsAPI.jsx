import React from 'react';

function useStationsAPI(filters) {
    const [stations, setStations] = React.useState(null);
    const [loading, setloading] = React.useState(true);
    const [error, seterror] = React.useState('');

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
            rows: 5,
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
            if (key !== 'favorites') {
                searchParams.set(`refine.${key}`, filters[key]);
            }
        });

        const url = `https://data.economie.gouv.fr/api/records/1.0/search/?${searchParams}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error);
                setStations(data?.records ?? []);
                setloading(false);
            });
    }, [filters]);

    return { stations, loading, error };
}

export default useStationsAPI;
