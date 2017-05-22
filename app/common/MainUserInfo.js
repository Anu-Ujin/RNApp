import React, { Component } from 'react';
import Card from './card';
import { Actions } from 'react-native-router-flux';
import CardSection from './cardSection';
import Button from './button';
import Spinner from './Spinner';
import firebase from 'firebase';

class MainUserInfo extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
				<Button onPress={() => firebase.auth().signOut()}>
					Гарах
				</Button> 
				);
			case false:
				return Actions.pop();
			default:
				return <Spinner size="large" />; 
		}
	}

	render() {
		return (
			<Card>
				<CardSection>
			    	<Button onPress={() => Actions.userCreate()}>
			    		Хувийн мэдээлэл
			    	</Button>          
			    </CardSection>

			    <CardSection>
			    	<Button >
			    		Миний машин
			    	</Button>          
			    </CardSection>

			    <CardSection>
			    		{this.renderContent()} 
			    </CardSection>
		  	</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 16,
		alignSelf: 'center',
		color: 'red'
	}
};

export default MainUserInfo;