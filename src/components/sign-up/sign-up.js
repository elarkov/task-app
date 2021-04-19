import React from 'react';

import {Link} from '../../router.js';
import history from '../../history.js';
import './sign-up.css';


export default class SignUp extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = (evt) => {
		evt.preventDefault();

		const {addUser, getUsers} = this.props;

		const newUser = {
			login: evt.target.elements.user.value,
			password: evt.target.elements.pass.value
		}

		const onSuccess = ()=>{
			console.log('Вы успешно зарегистрировались');
			history.push('/');
		}

		if(newUser.password !== evt.target.elements.pass_two.value) {
			console.log('Не совпадают пароли!');
		} else {
			getUsers()
			.then((users) => {
				const user = users.find((user) => user.login === newUser.login);
				if(!user) {
					addUser(newUser, onSuccess);
				} else {
					alert('Пользователь с таким именем уже есть в БД');
				}
			})
			evt.target.reset();
		}
	}

	render() {

		return(
			<form className="login-form bg-danger" onSubmit={this.handleSubmit} autoComplete="off">
				<input type="text" name="user" placeholder="Введите имя" required/>
				<input type="password" name="pass" placeholder="Введите пароль" required/>
				<input type="password" name="pass_two" placeholder="Введите пароль повторно" required/>
				<div className="login-form__bottom">
					<button className="login-form__btn btn btn-secondary" type="submit">Зарегистрироваться</button>
					<Link className="login-form__btn btn btn-primary" to="/login">Войти</Link>
				</div>
			</form>
		)
	}
}