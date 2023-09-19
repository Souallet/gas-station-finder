import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    StackDivider,
    Stack,
    Box,
    IconButton,
    Flex,
    Table,
    TableContainer,
    Th,
    Tr,
    Td,
    Tbody,
    Thead,
} from '@chakra-ui/react';
import { StarIcon } from '@heroicons/react/24/outline';
import { useStationsContext } from '../contexts/StationsContext';

function StationsItem({ station }) {
    const stations = useStationsContext();

    const [stationFuels, setStationFuels] = React.useState([]);
    const [isFavorite, setIsFavorite] = React.useState(
        stations.state?.favorites?.filter((s) => s?.fields?.id === station?.fields?.id).length ===
            1,
    );

    const toggleFavorite = async (e) => {
        e.preventDefault();
        const action = {
            type: isFavorite ? 'removeFavorite' : 'addFavorite',
            data: station,
        };
        stations.dispatch(action);
        await setIsFavorite(!isFavorite);
    };

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
        <Card>
            <CardHeader>
                <Flex alignItems="start" justifyContent="space-between" gap={10}>
                    <Heading size="md">{station?.fields?.epci_name ?? 'Inconnue'}</Heading>
                    <IconButton
                        p={1}
                        variant="ghost"
                        aria-label="Ajouter aux favoris"
                        onClick={toggleFavorite}
                        icon={<StarIcon fill={isFavorite ? 'currentColor' : 'none'} />}
                    />
                </Flex>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Heading size="xs" textTransform="uppercase">
                        {station?.fields?.dep_name ?? 'Inconnue'}
                    </Heading>

                    <Box>
                        {stationFuels.length === 0 ? (
                            'Aucun carburant'
                        ) : (
                            <TableContainer>
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Carburant</Th>
                                            <Th>Prix</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {stationFuels?.map((e) =>
                                            e?.name === undefined ? null : (
                                                <Tr
                                                    key={`${e?.name}${e?.price}${Number(
                                                        Math.random(),
                                                    ).toString(16)}`}
                                                >
                                                    <Td>{e?.name}</Td>
                                                    <Td>{e?.price} €</Td>
                                                </Tr>
                                            ),
                                        )}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        )}
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

StationsItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    station: PropTypes.any,
};

export default StationsItem;
