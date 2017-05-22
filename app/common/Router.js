import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import SignUp from '../footer/signup';
import MainUserInfo from './MainUserInfo';
import RegisterForm from './RegisterForm';
import images from './../config/images';
import ProfileInfo from './ProfileInfo';
import styles from '../../style/icon'

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>

			<Scene key="auth">
				<Scene
			        onRight={() => Actions.signup()}
			        rightButtonImage={require('../images/menu.png')}
			        key="profile" 
			        component={ProfileInfo} 
			        title="ХАРИУЦЛАГТАЙ ЖОЛООЧ"
			        titleStyle={{width:230, fontSize: 15}}
			        rightButtonIconStyle={{width: 30, height: 30, resizeMode:'contain'}}
			    />
				<Scene
					key="signup"
					component={SignUp} 
					title="ХАРИУЦЛАГТАЙ ЖОЛООЧ"
					titleStyle={{width:230, fontSize: 15}}
					direction="vertical"
					initial
				/>
				<Scene
					key="loginform"
					component={LoginForm} 
					title="НЭВТРЭХ"
					titleStyle={{fontSize: 15}}
				/>
				<Scene
					key="mainuserinfo"
					component={RegisterForm} 
					title="БҮРТГҮҮЛЭХ"
					titleStyle={{fontSize: 15}}
					direction="vertical"
				/>
			</Scene>

			<Scene key="main">
				<Scene
					onRight={() => Actions.userCreate()} 
					rightTitle="Add"
					key="userList" 
					component={MainUserInfo} 
					title="Хувийн мэдээлэл"
					initial 
				/>
				<Scene
					key="userCreate"
					component={UserCreate}
					title= "Хувийн мэдээлэл"
				/>
				<Scene
					key="userEdit"
					component={UserEdit}
					title= "Edit user"
				/>
			</Scene>		

		</Router>
	);
};

export default RouterComponent;