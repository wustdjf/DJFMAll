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
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';

import Main from '../main/Main';

var deviceWidth = Dimensions.get('window').width; 
var deviceHeight = Dimensions.get('window').height; 

class Launcher extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image 
                    source={require('../../images/launcher/launcher.jpg')} 
                    style={styles.launcher}>
                </Image>
            </View>
        );
    }

    _runLauncherImage(){
        this._timer = setInterval(() => {
            this.props.navigator.replace({
                name: '',
                component: Main,
                type: ''
            });
        }, 2000);
    }

    // 组件装载完成
    componentDidMount(){
        this._runLauncherImage();
    }

    // 组件即将卸载
    componentWillUnmount(){
        clearInterval(this._timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    launcher: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight
    }
});

Launcher.displayName='Launcher';
Launcher.propTypes = {
    
}

Launcher.defaultProps = {
    
}

export default Launcher;
