import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
    HomeScreen,
    DetailScreen
} from '../screens/index';
import { createAppContainer } from 'react-navigation';
export const AppStack = createStackNavigator(
    {
        Home : HomeScreen,
        Detail : DetailScreen,
    },
    {
        initialRouteName : 'Home'
    }
)

export const AppContainer = createAppContainer(AppStack)