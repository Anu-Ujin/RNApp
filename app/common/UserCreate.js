import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userUpdate, userCreate } from '../actions/UserActions';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'; 
import UserForm from './UserForm';

class UserCreate extends Component {

	OnButtonPress(){
		const  { fullname, lastname, phone } = this.props;

		this.props.userCreate({ fullname, lastname, phone });
	}

	renderButton(){
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={this.OnButtonPress.bind(this)}>
				Үүсгэх
			</Button>      	
		)
	}
 
	render(){
		return(
			<Card>
				<UserForm {...this.props} />
				<CardSection>
					{ this.renderButton() }    
				</CardSection>
			</Card>
		);
	};
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { fullname, lastname, phone, loading } = state.userForm;

	return { fullname, lastname, phone, loading };
};

export default connect(mapStateToProps, { userUpdate, userCreate })(UserCreate);