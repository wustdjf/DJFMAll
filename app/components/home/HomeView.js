/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import NavBar from '../utils/NavBar';

class HomeView extends Component {

    constructor(props) {
        super(props);
    
        this.state = {};
    }

    _leftPress() {
        alert(1);
    }

    _rightPress() {
        alert(2);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar 
                    title = '首页详情'
                    leftImg = {require('../../images/toolbar/ic_arrow_back_white_48dp.png')}
                    rightImg = {require('../../images/toolbar/ic_settings_white_48dp.png')}
                    onBackPress = {this._leftPress.bind(this) }
                    onRightPress = {this._rightPress.bind(this) }
                    >
                </NavBar>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
});

HomeView.displayName='HomeView';
HomeView.propTypes = {
    
}

HomeView.defaultProps = {
    
}

export default HomeView;
