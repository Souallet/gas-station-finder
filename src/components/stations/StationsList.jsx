import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import StationsItem from './StationsItem';
import GridLayout from '../../layouts/GridLayout';

function StationsList({ stations }) {
    const renderStations = () => stations.map((e) => <StationsItem key={uuidv4()} station={e} />);

    return stations.length === 0 ? (
        <p> Aucun résultat</p>
    ) : (
        <GridLayout>{renderStations()}</GridLayout>
    );
}

StationsList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    stations: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default StationsList;
