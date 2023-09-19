import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Flex, FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';

function SearchingForm({ onSubmit }) {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const registerQ = register('q', {});

    const registerVille = register('ville', {});

    const registerCP = register('cp', {
        minLength: { value: 5, message: 'Code postal invalide' },
        maxLength: { value: 5, message: 'Code postal invalide' },
    });

    const registerRegName = register('reg_name', {});

    const registerDepName = register('dep_name', {});

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap={6}>
                <FormControl isInvalid={errors.q}>
                    <FormLabel htmlFor="q">Recherche</FormLabel>
                    <Input
                        id="q"
                        placeholder="Recherche globale"
                        onChange={registerQ.onChange}
                        onBlur={registerQ.onBlur}
                        name={registerQ.name}
                        ref={registerQ.ref}
                    />
                    <FormErrorMessage>{errors.q && errors.q.message}</FormErrorMessage>
                </FormControl>
                <Flex gap={6}>
                    <FormControl isInvalid={errors.ville}>
                        <FormLabel htmlFor="ville">Ville</FormLabel>
                        <Input
                            id="ville"
                            placeholder="Paris"
                            onChange={registerVille.onChange}
                            onBlur={registerVille.onBlur}
                            name={registerVille.name}
                            ref={registerVille.ref}
                        />
                        <FormErrorMessage>{errors.ville && errors.ville.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.cp}>
                        <FormLabel htmlFor="cp">Code postal</FormLabel>
                        <Input
                            id="cp"
                            type="number"
                            placeholder="75001"
                            onChange={registerCP.onChange}
                            onBlur={registerCP.onBlur}
                            name={registerCP.name}
                            ref={registerCP.ref}
                        />
                        <FormErrorMessage>{errors.cp && errors.cp.message}</FormErrorMessage>
                    </FormControl>
                </Flex>

                <FormControl isInvalid={errors.reg_name}>
                    <FormLabel htmlFor="reg_name">Région</FormLabel>
                    <Input
                        id="reg_name"
                        placeholder="Île de France"
                        onChange={registerRegName.onChange}
                        onBlur={registerRegName.onBlur}
                        name={registerRegName.name}
                        ref={registerRegName.ref}
                    />
                    <FormErrorMessage>
                        {errors.reg_name && errors.reg_name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.dep_name}>
                    <FormLabel htmlFor="dep_name">Département</FormLabel>
                    <Input
                        id="dep_name"
                        placeholder="Seine-Saint-Denis"
                        onChange={registerDepName.onChange}
                        onBlur={registerDepName.onBlur}
                        name={registerDepName.name}
                        ref={registerDepName.ref}
                    />
                    <FormErrorMessage>
                        {errors.dep_name && errors.dep_name.message}
                    </FormErrorMessage>
                </FormControl>

                <Button
                    mt={4}
                    bgColor="green.400"
                    colorScheme="whatsapp"
                    isLoading={isSubmitting}
                    type="submit"
                >
                    Rechercher
                </Button>
            </Flex>
        </form>
    );
}

SearchingForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchingForm;
