import React,{Component}from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
  ScrollView
} from 'react-native';

import {StackNavigator,} from 'react-navigation';

export default class Address extends Component {
  static navigationOptions = {
    title: '选择地址',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollOrder}>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
          <Text>我是一个地址</Text>
        </ScrollView>
        <Button
          style={styles.confirmButton}
          title="确定收货地址"
          onPress={() =>navigate('SubmitOrder')}
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
