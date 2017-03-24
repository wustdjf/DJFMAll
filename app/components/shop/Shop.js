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
    ScrollView,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

import NavBar from '../utils/NavBar';

import {ShopCatagory, ShopData} from '../../constants/ShopData';
import CategoryList from '../utils/CategoryList';

class Shop extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            title: '',
            selectItem: 0,
            leftDataSource: ds.cloneWithRows(ShopCatagory),
            rightDataSource: ShopData[0]
        };

        this._renderLeftRow = this._renderLeftRow.bind(this);
    }

    componentDidMount() {
        var that = this;
        this.setState({
            title: that.props.title
        });
    }

    _renderLeftRow(rowData, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {this._pressRow(sectionID, rowID)}}>
                <View 
                    style={styles.leftRow} 
                    key={`{sectionID}-${rowID}`}>
                    <Text style={styles.leftText}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _pressRow(sectionID, rowID){
        this.setState({
            selectItem: rowID,
            rightDataSource: ShopData[rowID]
        });
    }

    _renderLeftSeparator(sectionID: number, rowID: number) {
        return (
            <View key={`{sectionID}-${rowID}`} style={styles.leftSeperator}></View>
        );
    } 

    _leftPress() {
        this.props.navigator.pop();
    }

    _rightPress() {
        alert(2);
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
                <View style={styles.goods}>
                    <View style={styles.left}>
                        <ListView
                            dataSource={this.state.leftDataSource}
                            renderRow={this._renderLeftRow}
                            renderSeparator={this._renderLeftSeparator}
                        />
                    </View>
                    <View style={styles.right}>
                        <ScrollView>
                            {
                                this.state.rightDataSource.map(function(item, index){
                                    return (
                                        <View style={styles.rightRow} key={index}>
                                            <Text style={styles.rightText}>{item.title}</Text>
                                            <CategoryList 
                                                style = {styles.rightGrid} 
                                                data = {item.data}>
                                            </CategoryList>
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    goods: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e8e8e8'
    },
    left: {
        flex: 1,
        backgroundColor: 'white'
    },
    right: {
        flex: 3,
        backgroundColor: '#e8e8e8',
        marginLeft: 10
    },
    leftRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    leftSeperator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    },
    rightSeperator: {
        height: 12,
        backgroundColor: '#e8e8e8'
    },
    rightRow: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    rightText: {
        fontSize: 15,
        color: 'black'
    },
    rightGrid: {
        
    }
});

Shop.displayName='Shop';
Shop.propTypes = {
    
}

Shop.defaultProps = {
    
}

export default Shop;
