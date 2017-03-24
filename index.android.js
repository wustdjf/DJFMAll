/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Router from './app/routers/Router';
import Launcher from './app/components/launcher/Launcher';

class Root extends Component {
    render() {
        return (
            <Router routes={{
                name: 'Launcher',
                component: Launcher,
                type: ''
            }}/>
        );
    }
}

AppRegistry.registerComponent('DJFMall', () => Root);
