import {
	USER_UPDATE,
	USER_CREATE,
	USERS_FETCH_SUCCESS,
	USER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	fullname: '',
	lastname: '',
	phone: '',
	email: '',
	password: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case USER_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case USER_CREATE:
			return INITIAL_STATE;
		case USER_SAVE_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	}
};