import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Heading, SimpleGrid } from '@chakra-ui/react';
import StationsItem from './StationsItem';

function StationsList({ stations }) {
    const renderStations = () => stations.map((e) => <StationsItem key={uuidv4()} station={e} />);

    return stations.length === 0 ? (
        <Heading py={10} w="full" textAlign="center">
            Aucun résultat
        </Heading>
    ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10}>
            {renderStations()}
        </SimpleGrid>
    );
}

StationsList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    stations: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default StationsList;
