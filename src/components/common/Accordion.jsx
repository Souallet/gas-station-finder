import React from 'react';
import PropTypes from 'prop-types';

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const displayArrow = () =>
        isOpen ? (
            <ChevronUpIcon className="w-8 h-8 text-white" />
        ) : (
            <ChevronDownIcon className="w-8 h-8 text-white" />
        );

    return (
        <div className="flex flex-col justify-center w-4/5">
            <button
                type="button"
                className="w-full py-2 px-4 flex items-center justify-between text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p>{title}</p>
                <div className="flex items-center justify-center">{displayArrow()}</div>
            </button>

            {isOpen && (
                <div className="shadow-3xl rounded-2xl shadow-indigo-500/50 p-4 mb-4 ">
                    {children}
                </div>
            )}
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Accordion;
