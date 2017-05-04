import React,{Component}from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

import {TabNavigator,} from 'react-navigation';
import Header from './header';
import Banner from './banner';
import Content from './content';


export default class CartScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '商品',
  };
  render() {
   // const { goBack } = this.props.navigation;
    return (
      <View>
        <Header />
        <ScrollView>
          <Banner />
          <Content />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column', //垂直排列

    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中    
  }

});
