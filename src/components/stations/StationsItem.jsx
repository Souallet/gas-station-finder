import React from 'react';
import PropTypes from 'prop-types';

import Card from '../common/Card';

function StationsItem({ station }) {
    const [stationFuels, setStationFuels] = React.useState([]);

    React.useEffect(() => {
        const getStationFuels = async () => {
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
                    'rupture',
                    'services_service',
                    'horaires_automate_24_24',
                ],
                timezone: 'Europe/Berlin',
            });

            searchParams.set('refine.id', station?.fields?.id);

            const res = await fetch(
                `https://data.economie.gouv.fr/api/records/1.0/search/?${searchParams}`,
            );

            const data = await res.json();
            return data?.records ?? [];
        };
        const fetchNewStations = async () => {
            let newStationFuels = await getStationFuels();
            newStationFuels = newStationFuels.map((e) => {
                return {
                    name: e?.fields?.prix_nom,
                    price: e?.fields?.prix_valeur,
                };
            });
            await setStationFuels(newStationFuels);
        };
        fetchNewStations();
    }, [station?.fields?.id]);

    return (
        <Card
            title={station?.fields?.epci_name ?? 'Undefined'}
            description={station?.fields?.dep_name ?? 'Undefined'}
            img=""
            fuels={stationFuels}
        />
    );
}

StationsItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    station: PropTypes.any,
};

export default StationsItem;
