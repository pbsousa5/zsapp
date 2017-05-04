import React,{Component}from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';


export default class header extends Component {


  render() {


    return (
      <View style={styles.wrapper}>
      
        <Text>header</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row', //水平排列
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏    
    height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏    
    backgroundColor: '#d74047',    
    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中    
  }


});




