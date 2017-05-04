import React,{Components}from 'react';

import {
  View,
} from 'react-native';

import {TabNavigator,} from 'react-navigation';

import MainScreen from './main/mainScreen';
import CartScreen from './cart/cartScreen';
import OrderScreen from './order/orderScreen';
import MyCenterScreen from './mycenter/mycenterScreen';





export default  App = TabNavigator({
  Main: {screen: MainScreen},
  Cart: {screen: CartScreen},
  Order: {screen: OrderScreen},
  MyCenter: {screen: MyCenterScreen}
},{
  tabBarPosition: 'bottom'
});