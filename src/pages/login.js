import React from "react";
import {getUsers, addUser} from '../api/server-users.js';

import SignIn from '../components/sign-in/sign-in.js';


export default class Login extends React.Component{

	constructor(props) {
		super(props);

		/**начальное состояние стейта */
		this.state = {
			messageHeader: "Регистрация",
			users: [
				{
					id: null,
					login: null,
					password: null
				}
			]
		}
	}

	getUser = (login) => {
		getUsers()
		.then(
			(users) => {
				/**обновление стейта */
				this.setState({
					users: this.state.users.filter((el) => el.login !== login)
				})
			}
		)
	}

	componentDidMount() {
		this.getUser();
	}


	render() {
		return (
			<div className="card text-white bg-danger mb-3 mt-5">
				<h1 className="card-header text-center">{this.state.messageHeader}</h1>
				<SignIn getUser={this.getUser} addUser={addUser}/>
			</div>
		)
	}
}