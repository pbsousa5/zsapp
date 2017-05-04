import React,{Component}from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';

import {StackNavigator,} from 'react-navigation';

export default class CartMain extends Component {
  static navigationOptions = {
    title: '购物车',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollOrder}>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
          <Text>我是一个商品</Text>
        </ScrollView>
        <Button
          style={styles.confirmButton}
          title="提交订单"
          onPress={() =>
            navigate('Address', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    //alignItems: '',
    justifyContent: 'flex-end',
  },
  scrollOrder: {
    //flex : 1,
  },
  confirmButton: {
    flex: 1,
    width: '100%',
    height: 30,
  }

});