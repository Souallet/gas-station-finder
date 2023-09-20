/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import PropTypes from 'prop-types';

const StationsContext = React.createContext();

const initialStationsState = {
    all: [],
    favorites: [],
    filters: [],
};

function getInitialState() {
    const stations = localStorage.getItem('stations');
    const initialState = stations ? JSON.parse(stations) : initialStationsState;
    return initialState;
}

function stationsReducer(state, action) {
    switch (action.type) {
        case 'addFavorite': {
            state.favorites.push(action?.data);
            return { ...state };
        }
        case 'removeFavorite': {
            const newFavorites = state.favorites.filter(
                (f) => f.fields.id !== action?.data?.fields?.id,
            );
            return { ...state, favorites: newFavorites };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function StationsProvider({ children }) {
    const [state, dispatch] = React.useReducer(stationsReducer, getInitialState());
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };

    React.useEffect(() => {
        localStorage.setItem('stations', JSON.stringify(state));
    }, [state]);

    return <StationsContext.Provider value={value}>{children}</StationsContext.Provider>;
}

StationsProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

function useStationsContext() {
    const context = React.useContext(StationsContext);
    if (context === undefined) {
        throw new Error('useStationsContext must be used within a CountProvider');
    }
    return context;
}

export { StationsProvider, useStationsContext };
