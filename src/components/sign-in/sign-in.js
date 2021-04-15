import React from 'react';
import { addUser } from '../../api/server-users';
import './sign-in.css';


export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = (evt) => {
		evt.preventDefault();

		const {getUser, addUser} = this.props;

		const newUser = {
			login: evt.target.elements.user.value,
			password: evt.target.elements.pass.value
		}
		addUser(newUser, getUser);
	}

	render() {

		return(
			<form className="login-form bg-danger" onSubmit={this.handleSubmit} autoComplete="off">
				<input type="text" name="user" placeholder="Введите имя" required/>
				<input type="password" name="pass" placeholder="Введите пароль" required/>
				<button className="login-form__btn btn btn-secondary" type="submit">Зарегистрироваться</button>
			</form>
		)
	}
}