import { 
	EMAIL_CHANGED , 
	PASSWORD_CHANGED,
	FIRSTNAME_CHANGED,
	LASTNAME_CHANGED,
	PHONE_CHANGED, 
	LOGIN_USER_SUCCESS,
	REGISTER_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const firstnameChanged = (text) => {
	return {
		type: FIRSTNAME_CHANGED,
		payload: text
	};
};

export const lastnameChanged = (text) => {
	return {
		type: LASTNAME_CHANGED,
		payload: text
	};
};

export const phoneChanged = (text) => {
	return {
		type: PHONE_CHANGED,
		payload: text
	};
};

this.state = {
	email: '',
	password: '',
	phone: '',
	firstname: '',
	lastname: ''
}

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
	};
};

export const registerUser = ({ email, password, firstname, lastname, phone }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => registerUserSuccess(dispatch,user))
			.catch(() => loginUserFail(dispatch));
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};

const registerUserSuccess = (dispatch, user) => {
	dispatch({
		type: REGISTER_USER_SUCCESS,
		payload: user
	});

	Actions.loginform();
};


