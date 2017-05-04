
import React,{Component}from 'react';
import {
  Text,
  View,
} from 'react-native';

import {TabNavigator,} from 'react-navigation';


export default class CartScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
  };
  render() {
   // const { goBack } = this.props.navigation;
    return (
      <View>
        <Text>我是个人中心</Text>
      
      </View>
    );
  }
}