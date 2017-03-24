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
import HTTPUtil from '../utils/HTTPUtil';

class Register extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          registertitle: '',

          phoneNumber: '',
          validCode: '',
          password: '',
          repassword: ''
        };
    }

    componentDidMount() {
        var that = this;
        this.setState({
            registertitle: that.props.registertitle
        });
    }

    _uploadImg(){

    }

    _leftPress() {
        this.props.navigator.pop();
    }

    _rightPress() {
        
    }

    _register(){
        var myHeaders = new Headers();  
        myHeaders.append("Content-Type", "multipart/form-data");  

        let formData = new FormData();  
        formData.append("phoneNumber", this.state.phoneNumber);  
        formData.append("validCode", this.state.validCode);  
        formData.append("password", this.state.password);  
        formData.append("repassword", this.state.repassword);  

        let file = {uri: uri, type: 'multipart/form-data', name: 'a.jpg'};  
  
        formData.append("avator", file);
                
        HTTPUtil.post(url, formData, myHeaders).then((json) => {  
            //处理 请求success  
            if(json.code === 0 ){  
                    //我们假设业务定义code为0时，数据正常  
                }else{  
                     //处理自定义异常  
                    this.doException(json);  
                }  
           },(json)=>{  
             //TODO 处理请求fail  
                
        })  
    }

    render() {
       return (
            <View style={styles.container}>
                <NavBar 
                    title = {this.state.registertitle}
                    leftImg = {require('../../images/toolbar/ic_arrow_back_white_48dp.png')}
                    rightImg = {require('../../images/toolbar/ic_settings_white_48dp.png')}
                    onBackPress = {this._leftPress.bind(this) }
                    onRightPress = {this._rightPress.bind(this) }
                    >
                </NavBar>
                <View style={styles.wrapper}>
                    <TouchableOpacity activeOpacity={0.5} onPress = {() => {this._uploadImg()}}>
                        <View style={styles.wrapper_image}>
                            <Image style={styles.style_image} source={require('../../images/logo/logo.png')}/>
                        </View>
                    </TouchableOpacity>
               
                    <TextInput
                        style={styles.style_user_input}
                        placeholder="手机号"                                                                            
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        textAlign="center"
                        keyboard={'numeric'}
                        onChangeText={(text)=> this.setState({phoneNumber: text})}
                    />
                    <View style={{height:10,backgroundColor:'#f4f4f4'}}/>

                    <View style={styles.wrapper_validcode}>
                        <TextInput
                            style={styles.style_validcode_input}
                            placeholder="验证码"                                                                            
                            numberOfLines={1}
                            autoFocus={true}
                            underlineColorAndroid={'transparent'}
                            textAlign="center"
                            onChangeText={(text)=> this.setState({validCode: text})}
                        />
                        <View style={styles.style_validcode_commit}>
                            <Text style={{color:'#fff'}}>获取验证码</Text>
                        </View>
                    </View>
                    <View style={{height:10,backgroundColor:'#f4f4f4'}}/>

                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder="密码"
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign="center"
                        onChangeText={(text)=> this.setState({password: text})}
                    />
                    <View style={{height:10,backgroundColor:'#f4f4f4'}}/>

                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder="确认密码"
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign="center"
                        onChangeText={(text)=> this.setState({repassword: text})}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress = {() => {this._register()}}>
                        <View style={styles.style_view_commit}>
                            <Text style={{color:'#fff'}}>注册</Text>
                        </View>
                    </TouchableOpacity>
                    
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
    wrapper_image: {
        marginTop: 40,
        marginBottom: 20
    },
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    style_user_input: {
        backgroundColor: '#fff',
        height: 40,
        textAlign: "center"
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 40
    },
    wrapper_validcode: {
        flexDirection: 'row'
    },
    style_validcode_input: {
        flex: 3,
        backgroundColor: '#fff',
        height: 40,
        textAlign: "center"
    },
    style_validcode_commit: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#63bbff',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63bbff',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

Register.displayName='Register';
Register.propTypes = {
    
}

Register.defaultProps = {
    
}

export default Register;

