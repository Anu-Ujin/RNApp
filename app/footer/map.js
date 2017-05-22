'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Image,
    Dimensions
} from 'react-native';
import images from './../config/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var Maps = React.createClass({
  render: function() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.textSoon}>
          ТУН УДАХГҮЙ ...
        </Text>  
      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
});

module.exports = Maps;