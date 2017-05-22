import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import CardSection from './cardSection';
import Button from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

		return(
			<Modal
				visible={visible}
				transparent
				animationType="slide"
				onRequestClose={() => {}}
			>
				<View style={styles.containerStyle}>
					<CardSection style={styles.cardStyle}>
						<Text style={styles.textStyle}>{children}</Text>
					</CardSection>

					<CardSection>
						<Button onPress={onAccept}>Yes</Button>
						<Button onPress={onDecline}>No</Button>
					</CardSection>
				</View>
			</Modal>
		);
	}

const styles = {
	cardStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export default Confirm;