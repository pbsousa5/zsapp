
import React,{Component}from 'react';
import {
  Text,
  View,
} from 'react-native';

import {TabNavigator,} from 'react-navigation';
import {StackNavigator,} from 'react-navigation';

import CartMain from './cartMain';
import Address from './address';
import SubmitOrder from './submitOrder';



 let cartScreen = StackNavigator({
  Cart: {screen: CartMain},
  Address: {screen: Address},
  SubmitOrder: {screen: SubmitOrder},
});

cartScreen.navigationOptions= {
  title: '车车',
}


export default cartScreen;