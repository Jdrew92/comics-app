import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {comicApp} from './Reducer';

export const store = createStore(comicApp, applyMiddleware(thunk));

