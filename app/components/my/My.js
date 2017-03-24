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
    Image,
    TouchableOpacity
} from 'react-native';

import NavBar from '../utils/NavBar';
import Router from '../../routers/Router';
import Login from '../login/Login';
import Register from '../register/Register';

class My extends Component {

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

    _pressAvator(){

    }

    _pressLogin(){
        this.props.navigator.push({
            name: 'Login',
            component: Login,
            type: '',
            params: {
                logintitle: '登录'
            }
        });
    }

    _pressAccount(){

    }

    _leftPress() {
        this.props.navigator.pop();
    }

    _rightPress() {
        alert(4);
    }

    render() {
        var that = this;
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

                <View style={styles.wrapper}>
                    <View style={styles.left}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {that._pressAvator()}}>  
                            <View style={styles.wrapperImg}>  
                                <Image style={styles.iconImg} source={require('../../images/logo/logo.png')}/>  
                            </View>  
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {that._pressLogin()}}>  
                            <View style={styles.wrapperLogin}>  
                                <Text style={styles.loginText}>注册/登录</Text>  
                            </View>  
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {that._pressAccount()}}>  
                        <View style={styles.right}>  
                            <Text style={styles.accountText}>账户管理</Text>
                        </View>  
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        backgroundColor: '#303f9f',  
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20
    },
    wrapperImg: {

    },
    iconImg: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    wrapperLogin: {
        marginLeft: 20
    },
    loginText: {
        fontSize: 15,
        color: 'white'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    accountText: {
        fontSize: 15,
        color: 'white'
    }
});

My.displayName='My';
My.propTypes = {
    
}

My.defaultProps = {
    
}

export default My;
