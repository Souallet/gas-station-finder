import React from 'react';

import Input from '../../common/Input';

function FiltersForm() {
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-2/5">
                <Input id="ville" name="ville" placeholder="Paris" />
            </div>
            <div className="w-2/5 ">
                <Input type="number" id="cp" name="cp" placeholder="75001" />
            </div>
            <div className="w-2/5 ">
                <Input id="reg_name" name="reg_name" placeholder="Île de France" />
            </div>
            <div className="w-2/5 ">
                <Input id="dep_name" name="dep_name" placeholder="Seine-Saint-Denis" />
            </div>
        </div>
    );
}

export default FiltersForm;
