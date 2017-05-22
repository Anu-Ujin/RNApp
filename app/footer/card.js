import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
};

const styles = {
	container: {
		borderWidth: 1,
		borderRadius: 25,
		borderColor: '#ccc',
		marginLeft: 17,
		marginRight: 17,
		marginTop: 10,
	}
}

export default Card;