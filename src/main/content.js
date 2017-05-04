import React,{Component}from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';


export default class content extends Component {


  render() {
    return (
      <View style={styles.wrapper}>
        <Text>content</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row', //水平排列
    height: 600,
    backgroundColor: 'pink',    
    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中    
  }
});




