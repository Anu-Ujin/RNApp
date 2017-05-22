import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { usersFetch } from '../actions/UserActions';
import ListItem from './ListItem';

class UserList extends Component {

	componentWillMount() {
		this.props.usersFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		// nextProps are the set of props that this component will be rendered
		// this.props is still the old set of props
		this.createDataSource(nextProps);
	}

	createDataSource({ users }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(users);
	}

	renderRow(user) {
		return <ListItem user={user} />
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	};
}

const mapStateToProps = state => {
	const users = _.map(state.users, (val, uid) => {
		return { ...val, uid }; //buh object iig array bolgoj baigaa
	});

	return { users };
};

export default connect(mapStateToProps, {usersFetch})(UserList);