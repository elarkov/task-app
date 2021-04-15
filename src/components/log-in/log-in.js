import React from 'react';

import history from '../../history.js';

export default class LogIn extends React.Component {

	constructor(props) {
		super(props);
	}

	

	onSubmit = (evt) => {
		evt.preventDefault();

		const {getUser} = this.props;

		const currentUser = {
			login: evt.target.elements.user.value,
			pass: evt.target.elements.pass.value
		}

		getUser()
			.then((users) => {
				const user = users.filter((user) => user.login === currentUser.login);
				
				if(user.length > 0 && user[0].password === currentUser.pass) {
					localStorage.setItem('user_id', user[0].id);
					history.push('/');
				} else {
					console.log('false')
				}
				
				


				// if(!user && !password) {
				// 	console.log('Данного пользователя не существует')
				// } else {
				// 	//history.push('/');
				// }
			})
	}

	render() {
		return(
			<form className="login-form" onSubmit={this.onSubmit} autoComplete="off">
				<input type="text" name="user" placeholder="Введите имя" required/>
				<input type="password" name="pass" placeholder="Введите пароль" required/>
				<button className="login-form__btn btn btn-secondary" type="submit">Войти</button>
			</form>
		)
	}
}