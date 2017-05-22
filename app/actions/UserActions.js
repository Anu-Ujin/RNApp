import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; 
import {
	USER_UPDATE,
	USER_CREATE,
	USERS_FETCH_SUCCESS,
	USERS_SAVE_SUCCESS
} from './types';

export const userUpdate = ({ prop, value }) => {
	return {
		type: USER_UPDATE,
		payload: { prop, value }
	}
};

export const userCreate = ({ fullname, lastname, phone })	=> {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users`)
			.push({ fullname, lastname, phone })
			.then(() => {
				dispatch({ type: USER_CREATE });
				Actions.userList({ type: 'reset' });
			});
	};
};

export const usersFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users`)
			.on('value', snapshot => { 
				dispatch({ type: USERS_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const userSave = ({ name, phone, shift, uid }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: USER_SAVE_SUCCESS });
				Actions.userList({ type: 'reset' });
			});
	};
};

export const userDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();

	return () => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
		.remove()
		.then(() => {
			Actions.userList({ type: 'reset' });
		});
	};
};
