import React from 'react';

// import {getUsers} from '../api/server-users.js';
import LogIn from '../components/log-in/log-in.js';

export default class Login extends React.Component {



	render() {
		return(
			<div className="card text-white bg-primary mb-3 mt-5">
				<h1 className="card-header text-center">Авторизируйтесь</h1>
				<LogIn/>
			</div>
		)
	}
}