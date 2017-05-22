'use strict';
import { Scene, Router, Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Image,
    Dimensions,
    Button
} from 'react-native';
import images from './../config/images';
import styles from '../../style/icon';

class SignUp extends Component {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
      if(result.isCancelled) {
        console.log('cancel');
      } else {
        console.log('success:' + result.grantedPermissions);
      }
    }, function(error) {
      console.log('An error occured:' + error);
    })
  }

  render(){
    return ( 
      <View style={styles.MainView}>
        <View style={styles.Loglist}>
          <TouchableHighlight underlayColor="#f8f8f8" onPress={() => Actions.loginform()} style={styles.logIn}>
            <Text style={styles.logText}>Нэвтрэх</Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._fbAuth} style={styles.facebook}>
            <Image
              style={styles.socialFacebook}
              source={images.facebook}
            />
          </TouchableOpacity>
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
}

export default SignUp;