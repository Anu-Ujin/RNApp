import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import LoginForm from '../common/LoginForm';
import firebase from 'firebase';
import reducers from '../reducers';
import RouterComponent from '../common/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Profile extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCaH8Vp-UlGykQ2HOBSK2wH2Fg8F1hV5NQ",
      authDomain: "totalapp-9cc78.firebaseapp.com",
      databaseURL: "https://totalapp-9cc78.firebaseio.com",
      projectId: "totalapp-9cc78",
      storageBucket: "totalapp-9cc78.appspot.com",
      messagingSenderId: "837785926172"
    };

    const firebaseRef = firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }

}

export default Profile;
