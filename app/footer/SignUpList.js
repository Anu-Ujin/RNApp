'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Image,
    Dimensions,
    Button
} from 'react-native';
import images from './../config/images';
import styles from '../../style/icon';

class SignUpList extends Component {
  render(){
    return ( 
      <View style={styles.MainView}> 
        <View style={styles.Loglist}>
          <TouchableHighlight underlayColor="#f8f8f8" onPress={this.logIn.bind(this)} style={styles.logIn}>
            <Text style={styles.logText}>Нэвтрэх</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.facebook}>
            <Image
              style={styles.socialFacebook}
              source={images.facebook}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.twitter}>
            <Image
              style={styles.socialTwitter}
              source={images.twitter}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.gmail}>
            <Image
              style={styles.socialGmail}
              source={images.gmail}
            />
          </TouchableHighlight>
        </View>
      </View>
      );
  }

  cancel(){
    this.props.navigator.pop();
  }

  logIn(){
    this.props.navigator.push({
      id:'UserIndex'
    });
  }

}

export default SignUpList;