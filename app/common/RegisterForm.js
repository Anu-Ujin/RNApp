import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, firstnameChanged, lastnameChanged, phoneChanged, registerUser } from '../actions';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'; 
import Input from './Input';
import Spinner from './Spinner';

class RegisterForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onFirstnameChange(text){
		this.props.firstnameChanged(text);
	}

	onLastnameChange(text){
		this.props.lastnameChanged(text);
	}

	onPhoneChange(text){
		this.props.phoneChanged(text);
	}

	onButtonPress() {
		const { email, password, firstname, lastname, phone } = this.props;
		this.props.registerUser({ email, password, firstname, lastname, phone });
	}

	renderButton(){
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
    		Хадгалах
    	</Button>      	
		)
	}

  render() {
		return (
			<Card>
		        <CardSection>
		        	<Input
		        		label="ОВОГ"
		        		onChangeText={this.onFirstnameChange.bind(this)}
		        		value={this.props.firstname}
		        	/>          
		        </CardSection>

		        <CardSection>
		        	<Input
		        		label="НЭР"
		        		onChangeText={this.onLastnameChange.bind(this)}
		        		value={this.props.lastname}
		        	/>          
		        </CardSection>

		        <CardSection>
		        	<Input
		        		label="УТАС"
		        		onChangeText={this.onPhoneChange.bind(this)}
		        		value={this.props.phone}
		        	/>          
		        </CardSection>

		        <CardSection> 
		        	<Input
		        		label="И-МЭЙЛ"
		        		onChangeText={this.onEmailChange.bind(this)}
		        		value={this.props.email}
		        	/>         
		        </CardSection>

		        <CardSection>
		        	<Input
		        		secureTextEntry
		        		label="НУУЦ ҮГ"
		        		onChangeText={this.onPasswordChange.bind(this)}
		        		value={this.props.password}
		        	/>          
		        </CardSection>

		        <CardSection>
		        	{ this.renderButton() }          
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

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, firstnameChanged, lastnameChanged, phoneChanged, registerUser
})(RegisterForm);