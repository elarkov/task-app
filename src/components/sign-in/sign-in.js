import React from 'react';
import './sign-in.css';

const SignIn = ({getListUsers, addUser}) => {

	const onSubmitUser = (evt) => {
		evt.preventDefault();
		const newUser = {
			login: evt.target.elements.user.value,
			password: evt.target.elements.pass.value
		}

		addUser(newUser, getListUsers);
		evt.target.reset();
	};

	return(
		<form className="login-form bg-danger" onSubmit={onSubmitUser} autoComplete="off">
			<input type="text" name="user" placeholder="Введите имя"/>
			<input type="password" name="pass" placeholder="Введите пароль"/>
			<button className="login-form__btn btn btn-secondary" type="submit">Зарегистрироваться</button>
		</form>
	)
};

export default SignIn;