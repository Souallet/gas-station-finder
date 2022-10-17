import React from 'react';

import StationsItem from './StationsItem';
import GridLayout from '../../layouts/GridLayout';

function StationsList() {
    const [stations, setStations] = React.useState([]);

    const getStations = async () => {
        const searchParams = new URLSearchParams({
            dataset: 'prix-carburants-fichier-instantane-test-ods-copie',
            q: '',
            start: 0,
            rows: 20,
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

        const res = await fetch(
            `https://data.economie.gouv.fr/api/records/1.0/search/?${searchParams}`,
        );

        const data = await res.json();
        return data?.records ?? [];
    };

    React.useEffect(() => {
        const fetchNewStations = async () => {
            let newStations = await getStations();
            if (stations.length > 0) {
                newStations = [...newStations, ...stations];
            }
            setStations(newStations);
        };
        fetchNewStations();
    }, []);

    return (
        <GridLayout>
            {stations.length === 0
                ? 'Aucune station'
                : stations.map((e) => <StationsItem key={`ID_${e?.recordid}`} station={e} />)}
        </GridLayout>
    );
}

export default StationsList;
