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
    Dimensions,
    Image,
    ToastAndroid,
    ViewPagerAndroid,
    Platform
} from 'react-native';

import ViewPager from 'react-native-viewpager';  

import NavBar from '../utils/NavBar';

var deviceWidth = Dimensions.get('window').width;  

import {swiperData, quickEntry} from '../../constants/HomeSwiperData';

function notifyMessage(msg) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } 
    else {
        AlertIOS.alert(msg);
    }
}

class Home extends Component {
    constructor(props) {  
        super(props);  
        // 用于构建DataSource对象  
        var dataSource = new ViewPager.DataSource({  
            pageHasChanged: (p1, p2) => p1 !== p2,  
        });  
        // 实际的DataSources存放在state中  
        this.state = {
            title: '',
            page: 1,  
            dataSource: dataSource.cloneWithPages(swiperData)  
        }  
    } 

    componentDidMount() {
        var that = this;
        this.setState({
            title: that.props.title
        })
    }

    _leftPress() {
        alert(this.state.title);
    }

    _rightPress() {
        alert(2);
    }

    render() {
        var that = this;
        return (
            <View style = {styles.container}>

                <NavBar 
                    leftImg = {require('../../images/toolbar/ic_arrow_back_white_48dp.png')}
                    rightImg = {require('../../images/toolbar/ic_settings_white_48dp.png')}
                    onBackPress = {this._leftPress.bind(this) }
                    onRightPress = {this._rightPress.bind(this) }
                    >
                </NavBar>

                <ViewPager  
                    style = {styles.VPStyle}  
                    dataSource = {this.state.dataSource}  
                    renderPage = {this._renderPage}  
                    isLoop = {true}  
                    autoPlay = {true}
                    onChangePage={this._onChangePage}
                />  
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0} onPageSelected={this.onPageSelected.bind(this)}>
                    {
                        quickEntry.map(function(item, index){
                             return (
                                <View key = {index}>
                                    {
                                        item.map(function(elem, i){
                                            return (
                                                <View key = {i} style={ (i == 0) ? {flexDirection:'row', justifyContent: 'space-between'} : {flexDirection:'row', justifyContent: 'space-between', marginTop:10}}>
                                                    {
                                                        elem.map(function(el, inner){
                                                            return (
                                                                <TouchableOpacity key = {inner} style={{width:70}} onPress = {() => that._entryClick(index, i, inner)}>
                                                                    <Image source={el.img} style={styles.imageStyle} />
                                                                    <Text style={styles.textStyle}>{el.text}</Text>
                                                                </TouchableOpacity>
                                                            );
                                                        })
                                                    }
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </ViewPagerAndroid>
            </View>
        );
    }

    _entryClick(index, i, inner) {
        notifyMessage(quickEntry[index][i][inner].text);
    }

    onPageSelected(event) {
        this.setState({page: 1 + event.nativeEvent.position});
    }

    _renderPage(data, pageID) {  
        return (  
            <Image source={data.img} style={styles.page}/>  
        );  
    }  

    _onChangePage(page) {
        //notifyMessage('Current page: ' + page);
    }

    pushHomeView(){
        this.props.navigator.push({
            name: 'HomeView',
            component: HomeView,
            type: 'PushFromRight'
        })
    }
}

const styles = StyleSheet.create({
     container: {  
        flex: 1,
    },  
    VPStyle: {
        height: 130,
        flexDirection: 'row',  
        alignItems: 'flex-start'
    },
    page: {  
        width: deviceWidth,  
        height: 130,  
        resizeMode: 'stretch'  
    },
    pageStyle: {
        flex: 3,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    },
    textStyle: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 11,
        color: '#555555',
        textAlign: 'center'
    },
    imageStyle: {
        alignSelf: 'center',
        width: 45,
        height: 45
    }  
});

Home.displayName='Home';
Home.propTypes = {
    
}

Home.defaultProps = {
    
}

export default Home;
