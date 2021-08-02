import { combineReducers } from 'redux';


export const hasError = (state = false, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return action.error;
        default:
            return state;
    }
}

const hero = (state, action) => {
    switch (action.type) {
        case 'SET_HERO':
            return state[action.id];
        default:
            return state;
    }
}

export const heroes = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return [...action.result]
        case 'SET_HERO':
            return hero(state, action);
        default:
            return state;
    }
}

export const comicApp = combineReducers({
    heroes: heroes,
    hasError: hasError
});