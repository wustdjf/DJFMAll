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
    Platform,
    ToastAndroid,
    BackAndroid,
    TextInput,
    StatusBar
} from 'react-native';

import Router from '../../routers/Router';

import {TAB_DATA} from '../../constants/tabData';

import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import My from '../my/My';
import More from '../more/More';

import TabNavigator from 'react-native-tab-navigator';

import Dimensions from 'Dimensions';

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;
// 屏幕高度
var screenHeight = Dimensions.get('window').height;

const TabArr = [Home, Shop, Cart, My, More];

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);

class Main extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
          selectedTab: TAB_DATA[0].State
      };
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
          BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
          BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    render() {
        var that = this;

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle = 'light-content'
                    backgroundColor = '#3f51b5'
                    style = {{height: STATUS_BAR_HEIGHT}}
                />
                <TabNavigator>
                    {
                        TAB_DATA.map(function(item, index){
                            return (
                                <TabNavigator.Item
                                    key = {index}
                                    selected = {that.state.selectedTab === item.State}  
                                    title = {item.Title}
                                    titleStyle={styles.tabText}  
                                    selectedTitleStyle={styles.selectedTabText} 
                                    badgeText = {index} 
                                    renderIcon={() => <Image style={styles.icon} source={item.renderIcon} />}  
                                    renderSelectedIcon={() => <Image style={styles.icon} source={item.renderSelectedIcon} />}  
                                    onPress={() => that.setState({ selectedTab: item.State })}>  
                                    <Router routes={{
                                        name: item.Name,
                                        component: TabArr[index],
                                        type: '',
                                        params: {
                                            title: item.Title
                                        }
                                    }}/>
                                </TabNavigator.Item> 
                            )
                        })
                    }
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    }, 
    tabText: {  
        color: "#000000",  
        fontSize: 13  
    },  
    selectedTabText: {  
        color: "#999999",  
        fontSize: 13  
    },  
    icon: {  
        width: 20,  
        height: 20  
    },
    toolbar: {  
        backgroundColor: '#303f9f',  
        height: 56  
    },
    searchBar: {
        height: 40,
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    wrapper: {
        height: 56,
        width: screenWidth * 0.6,
        flex: 1, 
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    titleBar: {
        flex: 1, 
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: screenWidth * 0.3
    }
});

Main.displayName='Main';
Main.propTypes = {
    
}

Main.defaultProps = {
    
}

export default Main;


