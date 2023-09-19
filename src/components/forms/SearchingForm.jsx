import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '../common/Accordion';
import SearchBar from './parts/SearchBar';
import FiltersForm from './parts/FiltersForm';

function SearchingForm({ onFormSubmit }) {
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(e);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <SearchBar />
            <div>
                <Accordion title="Plus de critères de recherche">
                    <FiltersForm />
                </Accordion>
            </div>
        </form>
    );
}

SearchingForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};

export default SearchingForm;
