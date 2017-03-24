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
    Dimensions,
    TouchableOpacity,
    Platform
} from 'react-native';


// 屏幕宽度
var screenWidth = Dimensions.get('window').width;
// 屏幕高度
var screenHeight = Dimensions.get('window').height;

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};

        
    }

    render() {
        return (
            <View style={styles.container}>
                
                {this._left(this.props.leftImg)}

                {this._middle(this.props.title)}
               
                {this._right(this.props.rightImg)}
                
            </View>
        );
    }


    _middle(title){
        var mid = (
                <View style = {styles.midTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );

        if(!title){
            mid = (
                <View style = {styles.midSearch}>
                    <TextInput
                    style = {styles.searchText}
                    placeholder = "请输入商家，品类，商圈"
                    underlineColorAndroid = {'transparent'}
                    ></TextInput>
                    <View style={styles.searchView} onPress = {() => this._search(text)}>
                        <Image style={styles.searchImg} source={require('../../images/toolbar/ic_search_white_48dp.png')}></Image>
                    </View>
                </View> 
            )
        }

        return mid;
    }

    _search(text){

    }

    _left(leftImg){
        if(leftImg){
            return (
                <TouchableOpacity activeOpacity={0.5} onPress = {()=>{this.props.onBackPress()} }>
                    <View style={styles.left}>
                        <Image style={styles.leftImg} source={this.props.leftImg}></Image>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    _right(rightImg){
        if(rightImg){
            return (
                <TouchableOpacity activeOpacity={0.5} onPress = {()=>{this.props.onRightPress()} }>
                    <View style={styles.right}>
                        <Image style={styles.rightImg} source={this.props.rightImg}></Image>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: screenWidth,
        backgroundColor: '#303f9f',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    left: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    leftImg: {
        width: 30,
        height: 30
    },
    midTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: '#ffffff'
    },
    midSearch: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    searchText: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        fontSize: 15
    },
    searchView: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchImg: {
        width: 30,
        height: 30
    },
    right: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    rightImg: {
        width: 30,
        height: 30
    }
});

NavBar.displayName='NavBar';
NavBar.propTypes = {
    title: React.PropTypes.string,
    leftImg: React.PropTypes.number,
    rightImg: React.PropTypes.number,
    onBackPress: React.PropTypes.func,
    onRightPress: React.PropTypes.func
}

NavBar.defaultProps = {
    
}

export default NavBar;
