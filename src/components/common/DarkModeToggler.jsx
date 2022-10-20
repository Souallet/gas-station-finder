import React from 'react';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeContext } from '../../contexts/ThemeContext';

function DarkModeToggler() {
    const themeContext = useThemeContext();

    const displayIcon = () =>
        themeContext.state.darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500 fill-yellow-500" />
        ) : (
            <MoonIcon className="h-6 w-6" />
        );

    return (
        <button
            type="button"
            className="absolute top-0 right-0"
            onClick={() => themeContext.dispatch({ type: 'toggleDarkMode' })}
        >
            {displayIcon()}
        </button>
    );
}

export default DarkModeToggler;
