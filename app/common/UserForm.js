import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { userUpdate} from '../actions/UserActions';
import CardSection from './cardSection';
import Input from './Input';

class UserForm extends Component {
	render(){
		return(
			<View>
				<CardSection>
					<Input 
						label="ОВОГ"
						value={this.props.fullname}
						onChangeText={value =>  this.props.userUpdate({ prop: 'fullname', value })}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="НЭР"
						value={this.props.lastname}
						onChangeText={value =>  this.props.userUpdate({ prop: 'lastname', value })}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="УТАС"
						value={this.props.phone}
						onChangeText={value =>  this.props.userUpdate({ prop: 'phone', value })}
					/>
				</CardSection>
			</View>
		);
	}
};

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.userForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, {userUpdate})(UserForm);