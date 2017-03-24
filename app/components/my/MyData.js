'use strict'

export const TAB_DATA = [
    {
        State: '首页',
        Title: '首页',
        Name: 'HOME',
        renderIcon: require("../images/tab/ic_tab_home.png"),
        renderSelectedIcon: require("../images/tab/ic_tab_home_press.png")
    },
    {
        State: '商场',
        Title: '商场',
        Name: 'SHOP',
        renderIcon: require("../images/tab/ic_tab_order.png"),
        renderSelectedIcon: require("../images/tab/ic_tab_order_press.png")
    },
    {
        State: '购物车',
        Title: '购物车',
        Name: 'CART',
        renderIcon: require("../images/tab/ic_tab_cart.png"),
        renderSelectedIcon: require("../images/tab/ic_tab_cart_press.png")
    },
    {
        State: '我的',
        Title: '我的',
        Name: 'MY',
        renderIcon: require("../images/tab/ic_tab_center.png"),
        renderSelectedIcon: require("../images/tab/ic_tab_center_press.png")
    },
    {
        State: '更多',
        Title: '更多',
        Name: 'MORE',
        renderIcon: require("../images/tab/ic_tab_more.png"),
        renderSelectedIcon: require("../images/tab/ic_tab_more_press.png")
    }
]
    

export const ToolbarData = {
    actions: [
        {title: 'Search', icon:require('../images/toolbar/ic_search_white_48dp.png'), show: 'always'},  
        {title: 'Settings', icon:require('../images/toolbar/ic_settings_white_48dp.png'), show: 'always'}
    ],
    navIcon: require('../images/toolbar/ic_menu_white_24dp.png')
}

module.exports = {
    TAB_DATA: TAB_DATA,
    ToolbarData: ToolbarData
}






  
