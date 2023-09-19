import React from 'react';

import {
    Flex,
    Container,
    Spinner,
    Select,
    Card,
    SimpleGrid,
    Heading,
    Text,
    Box,
    Stack,
} from '@chakra-ui/react';
import StationsList from '../components/stations/StationsList';
import useStationsAPI from '../hooks/useStationsAPI';
import SearchingForm from '../components/forms/SearchingForm';

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

    const onSearchSubmit = async (values) => {
        const formData = Object.keys(values).reduce((fd, key) => {
            fd.append(key, values[key]);
            return fd;
        }, new FormData());

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
            <Flex justifyContent="center" alignItems="center" mt={20}>
                <Spinner size="xl" />
            </Flex>
        ) : (
            <>
                <Flex my={10} justify="space-between">
                    <Box>
                        Total : {stationsAPI?.total} résultat{stationsAPI?.total > 1 ? 's' : ''}
                    </Box>
                    <Select
                        w="fit"
                        id="limit"
                        name="limit"
                        value={oldLimit}
                        onChange={onLimitChange}
                    >
                        {limitOptions.map((e) => (
                            <option key={e.id} value={e.value}>
                                {e.value}
                            </option>
                        ))}
                    </Select>
                </Flex>
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
        <Container maxW="container.xl" mt={10}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} gap={10}>
                <Stack as={Box} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 20 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight="110%"
                    >
                        Recherchez votre station{' '}
                        <Text as="span" color="cyan.300" fontWeight={700}>
                            service
                        </Text>
                        .
                    </Heading>
                    <Text color="gray.500">
                        Découvrez les stations service autour de chez vous, les carburants
                        disponible ainsi que leur prix.
                    </Text>
                </Stack>
                <Flex
                    justifyContent={{ sm: 'center', md: 'end' }}
                    direction={{ md: 'row-reverse' }}
                >
                    <Card p={10} maxW="lg">
                        <SearchingForm onSubmit={onSearchSubmit} />
                    </Card>
                </Flex>
            </SimpleGrid>

            {searched ? displayStationList() : null}
        </Container>
    );
}

export default HomeScreen;
