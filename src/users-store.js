import { makeAutoObservable } from "mobx";
import {getUsers} from './api/server-users.js';

class UsersStore {
	currentUser = null

	constructor() {
		makeAutoObservable(this);
	}

	getListUsers = () => {
		const id = localStorage.getItem('user_id');
		getUsers()
			.then((users) => {
				const userItems = users.filter((user) => user.id === Number(id));
				this.currentUser = userItems[0].login
			})
	}

	

}

const usersStore = new UsersStore();

export {usersStore};