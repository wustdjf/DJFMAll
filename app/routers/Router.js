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
    Navigator,
    TouchableOpacity
} from 'react-native';

class Router extends Component {
    render() {
        return (
            <Navigator
                initialRoute={this.props.routes}
                renderScene={this.renderNav}
                configureScene={this.configureScene}
            />
        );
    }

    renderNav(route, navigator){
        let Component = route.component;
        return <Component navigator={navigator}  {...route.params} />;
    }

    configureScene(route, routeStack) {
        switch(route.type) {
            case 'PushFromRight':
                return Navigator.SceneConfigs.PushFromRight
            case  'FloatFromRight':
                return Navigator.SceneConfigs.FloatFromRight
            case  'FloatFromLeft':
                return Navigator.SceneConfigs.FloatFromLeft
            case  'FloatFromBottom':
                return Navigator.SceneConfigs.FloatFromBottom
            case  'FloatFromBottomAndroid':
                return Navigator.SceneConfigs.FloatFromBottomAndroid
            case  'FadeAndroid':
                return Navigator.SceneConfigs.FadeAndroid
            case  'HorizontalSwipeJump':
                return Navigator.SceneConfigs.HorizontalSwipeJump
            case  'HorizontalSwipeJumpFromRight':
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
            case  'VerticalUpSwipeJump':
                return Navigator.SceneConfigs.VerticalUpSwipeJump
            case  'VerticalDownSwipeJump':
                return Navigator.SceneConfigs.VerticalDownSwipeJump
            default:
                return Navigator.SceneConfigs.PushFromRight
        }
    }
}


const styles = StyleSheet.create({
    
});

Router.displayName='Router';
Router.propTypes = {
    routes: React.PropTypes.shape({
        name: React.PropTypes.string,
        component: React.PropTypes.func,
        type: React.PropTypes.string
    })
}

Router.defaultProps = {

}

export default Router;
