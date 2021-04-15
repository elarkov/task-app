import React from "react";
import {getUsers, addUser} from '../api/server-users.js';

import SignUp from '../components/sign-up/sign-up.js';


export default class Registr extends React.Component{

	constructor(props) {
		super(props);

		/**начальное состояние стейта */
		this.state = {
			users: []
		}
	}

	// getUser = (login) => {
	// 	getUsers()
	// 	.then(
	// 		(users) => {
	// 			/**обновление стейта */
	// 			this.setState({
	// 				users: users.filter((el) => el.login === login)
	// 			})
	// 		}
	// 	)
	// }

	render() {
		return (
			<div className="card text-white bg-danger mb-3 mt-5">
				<h1 className="card-header text-center">Регистрация</h1>
				<SignUp getUsers={getUsers} addUser={addUser}/>
			</div>
		)
	}
}

//getUser={this.getUser}