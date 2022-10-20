/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext();

const initialThemeState = {
    darkMode: window.matchMedia('(prefers-color-scheme: dark)'),
};

function getInitialState() {
    const theme = localStorage.getItem('theme');
    const initialState = JSON.parse(theme) ?? initialThemeState;
    return initialState;
}

function themeReducer(state, action) {
    switch (action.type) {
        case 'toggleDarkMode': {
            return { ...state, darkMode: !state.darkMode };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function ThemeProvider({ children }) {
    const [state, dispatch] = React.useReducer(themeReducer, getInitialState());
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };

    React.useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(state));
    }, [state]);

    return (
        <ThemeContext.Provider value={value}>
            <div className={`${value?.state?.darkMode && 'dark'}`}>{children}</div>
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

function useThemeContext() {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a CountProvider');
    }
    return context;
}

export { ThemeProvider, useThemeContext };
