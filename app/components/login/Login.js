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
    TextInput,
    TouchableOpacity
} from 'react-native';

import NavBar from '../utils/NavBar';
import Register from '../register/Register';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          logintitle: ''
        };
    }

    componentDidMount() {
        var that = this;
        this.setState({
            logintitle: that.props.logintitle
        });
    }

    _register(){
        this.props.navigator.replace({
            name: '',
            component: Register,
            type: '',
            params: {
                registertitle: '注册'
            }
        });
    }

    _unableLogin(){

    }

    _leftPress() {
        this.props.navigator.pop();
    }

    _rightPress() {
        
    }

    render() {
       return (
           <View style={styles.container}>
                <NavBar 
                    title = {this.state.logintitle}
                    leftImg = {require('../../images/toolbar/ic_arrow_back_white_48dp.png')}
                    rightImg = {require('../../images/toolbar/ic_settings_white_48dp.png')}
                    onBackPress = {this._leftPress.bind(this) }
                    onRightPress = {this._rightPress.bind(this) }
                    >
                </NavBar>

                <View style={styles.wrapper}>
                    <Image style={styles.style_image} source={require('../../images/logo/logo.png')}/>
                    <TextInput
                        style={styles.style_user_input}
                        placeholder="手机号/邮箱"                                                                            
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        textAlign="center"
                    />
                    <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder="密码"
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign="center"
                    />
                    <View style={styles.style_view_commit}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </View>

                    <View style={styles.bottom}>
                        <Text style={styles.style_view_unlogin} onPress = {() => {this._unableLogin()}}>无法登录?</Text>
                        <Text style={styles.style_view_register} onPress = {() => {this._register()}}>新用户</Text>
                    </View>
                </View>
               
           </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f4f4f4',
        flex:1
    },
    wrapper: {
        backgroundColor:'#f4f4f4',
        flex:1
    },
    style_image:{
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center'
    },
    style_user_input:{
        backgroundColor: '#fff',
        marginTop: 10,
        height: 40,
        textAlign: "center"
    },
    style_pwd_input:{
        backgroundColor: '#fff',
        height: 40
    },
    style_view_commit:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63bbff',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    style_view_unlogin:{
        fontSize: 12,
        color: '#63bbff',
        marginLeft: 10,
    },
    style_view_register:{
        fontSize: 12,
        color: '#63bbff',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right'
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom: 10
    }
});

Login.displayName='Login';
Login.propTypes = {
    
}

Login.defaultProps = {
    
}

export default Login;

