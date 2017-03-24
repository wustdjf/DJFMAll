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
    TouchableOpacity,
    Dimensions
} from 'react-native';

// 获取屏幕宽度   
const screenW = Dimensions.get('window').width;   
  
// 一些常亮设置  
const cols = 3;  
const vMargin = 20;
const hMargin = 10;  
const cellWH = ((screenW * 3) / 4 - vMargin * (cols - 1)) / cols;

class CategoryList extends Component {  
   
    constructor(props) {  
        super(props);  
        this.state = {};
    }  

    _press(item, index){
        alert(item.title+'   '+index);
    }
  
    /** 
    TouchableOpacity触摸点击高亮效果 
    underlayColor:当触摸或者点击控件的时候显示出的颜色 
    activeOpacity:触摸时显示的不透明度 
    */  
    render() {  
        var that = this;
        return (  
            <View style={styles.container}>
                {
                    this.props.data.map(function(item, index){
                        return (
                            <TouchableOpacity activeOpacity={0.5} key={index} onPress={() => {that._press(item, index)}}>  
                                <View style={styles.wrapper}>  
                                    <Image style={styles.iconImg} source={item.icon}/>  
                                    <Text style={styles.showText}>{item.title}</Text>  
                                </View>  
                            </TouchableOpacity>
                        )
                    })  
                }
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {
        // 主轴方向  
        flexDirection: 'row',  
        justifyContent: 'space-between',
        // 一行显示不下,换一行  
        flexWrap: 'wrap',  
        // 侧轴方向  
        alignItems: 'center', // 必须设置,否则换行不起作用 
        
    },
    wrapper: {   
        alignItems: 'center',  
        width: cellWH,  
        height: cellWH,  
        marginTop: hMargin,
        marginBottom: hMargin  
    },  
    iconImg: {  
        width: cellWH - 20,  
        height: cellWH - 20,  
        marginBottom: 2   
    },  
    showText: { 
        width: cellWH - 20,  
        fontSize: 12,
        textAlign: 'center'
    }  
});  

CategoryList.displayName='CategoryList';
CategoryList.propTypes = {
    data: React.PropTypes.array
}

CategoryList.defaultProps = {
    
}

export default CategoryList;