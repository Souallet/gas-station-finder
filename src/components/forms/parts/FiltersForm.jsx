import React from 'react';

import Input from '../../common/Input';

function FiltersForm() {
    return (
        <div>
            <div>
                <Input id="ville" name="ville" placeholder="Paris" />
            </div>
            <div>
                <Input type="number" id="cp" name="cp" placeholder="75001" />
            </div>
            <div>
                <Input id="reg_name" name="reg_name" placeholder="Île de France" />
            </div>
            <div>
                <Input id="dep_name" name="dep_name" placeholder="Seine-Saint-Denis" />
            </div>
        </div>
    );
}

export default FiltersForm;
