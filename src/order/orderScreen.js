
import React,{Component}from 'react';
import {
  Text,
  View,
} from 'react-native';

import {TabNavigator,} from 'react-navigation';
import OrderContent from './orderContent';

export default class orderScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '订单',
  };
  render() {
   // const { goBack } = this.props.navigation;
    return (
      <View>
        <View>
          <Text>订单列表</Text>
        </View>
        <OrderContent />
      </View>
    );
  }
}