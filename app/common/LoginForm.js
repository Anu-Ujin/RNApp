import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'; 
import Input from './Input';
import Spinner from './Spinner';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderButton(){
		if (this.props.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Нэвтрэх
			</Button>      	
		)
	}

  render() {
		return (
			<Card>
		        <CardSection> 
		        	<Input
		        		label="И-МЭЙЛ"
		        		placeholder="email@gmail.co"
		        		onChangeText={this.onEmailChange.bind(this)}
		        		value={this.props.email}
		        	/>         
		        </CardSection>

		        <CardSection>
		        	<Input
		        		secureTextEntry={true}
		        		label="НУУЦ ҮГ"
		        		placeholder="Password"
		        		onChangeText={this.onPasswordChange.bind(this)}
		        		value={this.props.password}
		        	/>          
		        </CardSection>

		        <Text style={styles.errorTextStyle}>
		        	{this.props.error}
		        </Text>

		        <CardSection>
		        	{ this.renderButton() }          
		        </CardSection>

		        <CardSection>
		        	<Button onPress={() => Actions.mainuserinfo()}>
				    		Бүртгүүлэх
				    	</Button>          
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
	emailChanged, passwordChanged, loginUser 
})(LoginForm);