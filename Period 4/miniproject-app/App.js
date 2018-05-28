import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";

import LoginScreen from './Login';
import MapScreen from './Map';
import BlogScreen from './Blog';

export default class App extends Component {

    render() {
        return (
            <AppNavigator/>
        );
    }
}

const AppNavigator = createStackNavigator({
    LoginScreen: {screen: LoginScreen},
    MapScreen: {screen: MapScreen},
    BlogScreen: {screen: BlogScreen}
});