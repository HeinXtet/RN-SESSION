/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as StoreProvider } from 'react-redux'

import {configureStore} from './src/store/index'

const Main = () => {
    return <StoreProvider store={configureStore()}>
        <App />
    </StoreProvider>
}
AppRegistry.registerComponent(appName, () => Main);
