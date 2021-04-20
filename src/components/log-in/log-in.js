import React from 'react';

import { observer } from 'mobx-react-lite';
import {usersStore} from '../../users-store.js';

import {Link} from '../../router.js';
//import history from '../../history.js';

import './log-in.css';

const LogIn = observer(() => {

	const {onSubmit} = usersStore;

	return (
		<form className="login-form" onSubmit={onSubmit} autoComplete="off">
			<input type="text" name="user" placeholder="Введите имя" required/>
			<input type="password" name="pass" placeholder="Введите пароль" required/>
			<div className="login-form__bottom">
				<button className="login-form__btn btn btn-secondary" type="submit">Войти</button>
				<Link className="login-form__btn btn btn-danger" to="/registr">Регистрация</Link>
			</div>
		</form>
	)
});

export default LogIn;



// export default class LogIn extends React.Component {

// 	constructor(props) {
// 		super(props);
// 	}

// 	onSubmit = (evt) => {
// 		evt.preventDefault();

// 		const {getUser} = this.props;

// 		const currentUser = {
// 			login: evt.target.elements.user.value,
// 			pass: evt.target.elements.pass.value
// 		}

// 		getUser()
// 			.then((users) => {
// 				const user = users.filter((user) => user.login === currentUser.login);
				
// 				if(user.length > 0 && user[0].password === currentUser.pass) {
// 					localStorage.setItem('user_id', user[0].id);
// 					history.push('/');
// 				} else {
// 					console.log('false')
// 				}
				
// 			})
// 	}

// 	render() {
// 		return(
// 			<form className="login-form" onSubmit={this.onSubmit} autoComplete="off">
// 				<input type="text" name="user" placeholder="Введите имя" required/>
// 				<input type="password" name="pass" placeholder="Введите пароль" required/>
// 				<div className="login-form__bottom">
// 					<button className="login-form__btn btn btn-secondary" type="submit">Войти</button>
// 					<Link className="login-form__btn btn btn-danger" to="/registr">Регистрация</Link>
// 				</div>
// 			</form>
// 		)
// 	}
// }