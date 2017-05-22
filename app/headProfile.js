'use strict';

import React, { Component } from 'react';
import {
  View,
  Image,
  Text, TouchableHighlight
} from 'react-native';
import images from './config/images';
import styles from './../style/icon';
import Profile from './footer/profile';

var Info = require('./footer/info');
var Maps = require('./footer/map');
var Oil = require('./footer/oil');

class HeadProfile extends Component {
  render(){
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.homeFirst}></Text>
        <Text style={styles.homeText}>ХАРИУЦЛАГТАЙ ЖОЛООЧ</Text>
        <TouchableHighlight onPress={this.signUp.bind(this)}>
          <Image
            style={styles.menuIcon}
            source={images.menu}
          />
        </TouchableHighlight>
      </View>
      );
  }
  signUp(){
  this.props.navigator.push({
    id: 'Oil'
  });
}
}

export default HeadProfile;