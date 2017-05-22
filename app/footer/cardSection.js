import React from 'react';
import {StyleSheet,View} from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
};

const styles = {
	container: {
		padding: 7,
		paddingLeft: 10,
		backgroundColor: '#fff',
		flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'space-between',
		borderColor: '#ccc',
		borderRadius: 25,
	}
}

export default CardSection;