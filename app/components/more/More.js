/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavBar from '../utils/NavBar';

class More extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            title: ''
        };
    }

    componentDidMount() {
        var that = this;
        this.setState({
            title: that.props.title
        });
    }

    _leftPress() {
        this.props.navigator.pop();
    }

    _rightPress() {
        alert(4);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar 
                    title = {this.state.title}
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
        backgroundColor: '#F5FCFF',
    }
});

More.displayName='More';
More.propTypes = {
    
}

More.defaultProps = {
   
}

export default More;
