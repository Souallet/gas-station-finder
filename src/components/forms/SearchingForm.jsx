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
        <form className="flex flex-col w-full items-center gap-8" onSubmit={(e) => onSubmit(e)}>
            <SearchBar />
            <div className="w-3/4">
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
