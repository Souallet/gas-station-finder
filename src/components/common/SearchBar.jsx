import React from 'react';
import PropTypes from 'prop-types';

import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar({ onFormSubmit }) {
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(e);
    };

    return (
        <form className="flex w-3/4 gap-2" onSubmit={(e) => onSubmit(e)}>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none fill-indigo-500">
                    <MagnifyingGlassIcon className="h- w-5 text-indigo-500" />
                </div>
                <input
                    type="text"
                    id="geolocation"
                    className=" border gray-indigo-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 block w-full pl-10 p-2.5 "
                    placeholder="Paris, Lyon, ..."
                    required
                />
            </div>
            <button
                type="button"
                className="p-2.5 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            >
                <MapPinIcon className="h- w-5 text-white" />
            </button>
            <button
                type="submit"
                className="p-2.5 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            >
                Rechercher
            </button>
        </form>
    );
}

SearchBar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
