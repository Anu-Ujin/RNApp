import _ from 'lodash';
import React, { Component } from 'react';
import Card from './card';
import Communications from 'react-native-communications';
import CardSection from './cardSection';
import Button from './button';
import Confirm from './Confirm';
import UserForm from './UserForm';
import { userUpdate, userSave, userDelete } from '../actions/UserActions';
import { connect } from 'react-redux'; 

class UserEdit extends Component {
	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.user, (value, prop) => {
			this.props.userUpdate({ prop, value });
		});
	}

	OnButtonPress(){
		const { name, phone, shift } = this.props;
		
		this.props.userSave({ name, phone, shift, uid: this.props.user.uid });
	}

	OnTextPress(){
		const { phone, shift } = this.props;
		
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onAccept(){
		const { uid } = this.props.user;

		this.props.userDelete({ uid });
	}

	onDecline(){
		this.setState({ showModal: false });
	}

	render() {
		return(
			<Card>
				<UserForm />

				<CardSection>
					<Button onPress={this.OnButtonPress.bind(this)}>
						Save changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.OnTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Delete user
					</Button>
				</CardSection>

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					Are you sure delete?
				</Confirm>

			</Card>
		);
	};
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.userForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { userUpdate, userSave, userDelete })(UserEdit);