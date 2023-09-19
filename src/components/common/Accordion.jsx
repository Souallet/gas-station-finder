import React from 'react';
import PropTypes from 'prop-types';

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const displayArrow = () => (isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />);

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <p>{title}</p>
                <div>{displayArrow()}</div>
            </button>

            {isOpen && <div> {children}</div>}
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Accordion;
