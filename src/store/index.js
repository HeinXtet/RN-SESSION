
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import React from 'react'
export const configureStore = () => {
    let store = createStore(rootReducer)
    return store;
}