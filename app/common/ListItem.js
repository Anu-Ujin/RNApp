import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import CardSection from './cardSection';

class ListItem extends Component {

	onRowPress(){
		Actions.userEdit({ user: this.props.user });
	}

	render() {
		const { name } = this.props.user;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.ListTitleStyle}>
							{name}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	ListTitleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;