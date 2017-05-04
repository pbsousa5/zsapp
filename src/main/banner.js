import React,{Component}from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';

import {TabNavigator,} from 'react-navigation';

export default class banner extends Component {


  render() {
    return (
      <View style={styles.wrapper}>
        <Text>banner</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row', //水平排列
    height: 170,
    backgroundColor: 'red',    
    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中    
  }
});




