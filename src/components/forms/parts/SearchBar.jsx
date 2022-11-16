import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '../../common/Input';

function SearchBar() {
    return (
        <div className="flex w-3/4 gap-2">
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none fill-indigo-500">
                    <MagnifyingGlassIcon className="h- w-5 text-indigo-500" />
                </div>
                <Input type="text" id="q" name="q" placeholder="Rechercher" />
            </div>
            {/* <button
                type="button"
                className="p-2.5 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            >
                <MapPinIcon className="h- w-5 text-white" />
            </button> */}
            <button
                type="submit"
                className="p-2.5 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            >
                Rechercher
            </button>
        </div>
    );
}

export default SearchBar;
