import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Input from '../../common/Input';

function SearchBar() {
    return (
        <div>
            <div>
                <div>
                    <MagnifyingGlassIcon />
                </div>
                <Input type="text" id="q" name="q" placeholder="Rechercher" />
            </div>
            <button type="submit">Rechercher</button>
        </div>
    );
}

export default SearchBar;
