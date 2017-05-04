import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

 
 
export default class OrderContent extends Component {
  render() {
    return (
      <View style={{paddingTop: 20}}>
        <ScrollableTabView>
          <ReactPage tabLabel="React" />
          <FlowPage tabLabel="Flow" />
          <JestPage tabLabel="Jest" />
        </ScrollableTabView>
      </View>
    );
  }
}