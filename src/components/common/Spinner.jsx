import React from 'react';

function Spinner() {
    return (
        <div className="flex justify-center w-full p-20">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-indigo-400 border-4 h-20 w-20" />
        </div>
    );
}

export default Spinner;
