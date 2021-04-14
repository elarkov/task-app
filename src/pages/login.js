import React from "react";
import {getUsers, addUser} from '../api/server-users.js';

import SignIn from '../components/sign-in/sign-in.js';



export default class Login extends React.Component{

	constructor() {
		super();

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

	getListUsers = () => {
		getUsers()
		.then(
			(users) => {
				this.setState({
					users: users
				})
			}
		)
	}

	componentDidMount() {
		this.getListUsers();
	}


	render() {
		return (
			<div className="card text-white bg-danger mb-3 mt-5">
				<h1 className="card-header text-center">{this.state.messageHeader}</h1>
				<SignIn getListUsers={this.getListUsers} addUser={addUser}/>
			</div>
		)
	}
}