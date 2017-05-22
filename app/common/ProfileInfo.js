import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from '../../style/icon';
import images from './../config/images';

class ProfileInfo extends Component {

  render() {
		return (
			<View style={styles.MainView}>
		      <Image
		        style={styles.camera}
		        source={images.cam}
		      />
		      <Image
		        style={styles.myCar}
		        source={images.mycar}
		      />
	      	<View>

	      </View>
    </View>
		);
	}
}

export default ProfileInfo;