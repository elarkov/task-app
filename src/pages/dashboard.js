/**import react and hooks */
import React, { useEffect } from "react";

/**import library https://github.com/mobxjs/mobx-react-lite */
import { observer } from "mobx-react-lite";

/**import stores for mobx */
import { tasksStore } from "../tasks-store.js";
import { usersStore } from '../users-store.js';

/**import server requests */
import { addTask, updateTask, deleteTask } from '../api/server.js';

/**import components */
import TasksSearch from '../components/tasks-search/tasks-search.js';
import CreateTask from '../components/create-task/create-task.js';
import TasksDetails from '../components/tasks-details/tasks-details.js';
import TasksFilter from '../components/tasks-filter/tasks-filter.js';

/**import styles component */
import '../components/app/app.css';


const Dashboard = observer(() => {

	/** destructuring methods and properties from store tasks-store.js*/
	const {
		getTaskList, 
		removeItem,
		handleRemoveUser,
		filterTasks
	} = tasksStore;

	/** destructuring methods and properties from store users-store.js*/
	const {currentUser, getListUsers} = usersStore;

	/**hook a method from tasks-store.js */
	useEffect(() => {
		getTaskList()
	}, []);

	/**hook a method from users-store.js */
	useEffect(() => {
		getListUsers()
	}, []);

	return (
		<div className="content">
			<div className="content__list">
				<h3 className="content__header bg-primary">Список задач для {currentUser}</h3>
				<div className="content__wrapper">
					<TasksSearch /> 
					<CreateTask submitHandler={addTask}/>
					<TasksFilter/>
				</div>
				<TasksDetails />
			</div>
			<button className="btn btn-danger" onClick={handleRemoveUser}>Выйти</button>
		</div>
	)
});
	
export default Dashboard;

//import {getTasks, addTask, updateTask, deleteTask} from '../api/server.js';

//import {getUsers} from '../api/server-users.js';

//import {usersStore} from '../users-store.js';

// import TasksSearch from '../components/tasks-search/tasks-search.js';
// import CreateTask from '../components/create-task/create-task.js';
// import TasksDetails from '../components/tasks-details/tasks-details.js';
// import TasksFilter from '../components/tasks-filter/tasks-filter.js';


// import history from './../history.js';

// import '../components/app/app.css';

//  class Dashboard extends React.Component {

// 	constructor() {
// 		super();

// 		this.state = {
// 			tasks: [],
// 			filterTasks: [],
// 		}
// 	}

	// getTaskList = () => {
	// 	const id = localStorage.getItem('user_id');

	// 	getTasks()
	// 	.then((tasks) => {
	// 		const items = tasks.filter((task) => task.user_id === Number(id));

	// 		this.setState({
	// 			tasks: items,
	// 			filterTasks: items
	// 		})

	// 	})
	// }

	// getListUsers = () => {
	// 	const id = localStorage.getItem('user_id');
	// 	getUsers()
	// 		.then((users) => {
	// 			const userItems = users.filter((user) => user.id === Number(id));
				
	// 			this.setState({
	// 				currentUser: userItems[0].login
	// 			})
	// 		})
	// }

	// componentDidMount() {
	// 	this.getTaskList();
	// 	this.getListUsers();
	// }

	// searchQueryItem = (queryText) => {
	// 	if(queryText) {
	// 		this.setState({
	// 			filterTasks: this.state.tasks.filter((task) => task.text.toLowerCase().includes(queryText.toLowerCase()))
	// 		})
	// 	} else {
	// 		this.setState({
	// 			filterTasks: this.state.tasks
	// 		})
	// 	}
	// }

	// searchItem = (evt) => {
	// 	this.searchQueryItem(evt.target.value)
	// }

	// removeItem = (id) => {
	// 	this.setState({
	// 		tasks: this.state.tasks.filter(item => item.id !== id),
	// 		filterTasks: this.state.tasks.filter(item => item.id !== id)
	// 	})
	// }

	// handleRemoveUser = (evt) => {
	// 	evt.preventDefault();
	// 	localStorage.removeItem('user_id');
	// 	history.push('/login');
	// }

	// handleSortTasksDone = () => {
	// 	this.setState({
	// 		filterTasks: this.state.tasks.filter((item) => item.isComplete === true)
	// 	})
	// }

	// handleSortTaskUnComplete = () => {
	// 	this.setState({
	// 		filterTasks: this.state.tasks.filter((item) => item.isComplete === false)
	// 	})
	// }

	// handleSortTasksAll = () => {
	// 	this.setState({
	// 		filterTasks: this.state.tasks
	// 	})
	// }

	
//  render() {

// 		return (
// 			<>
			// <div className="content">
			// 	<div className="content__list">
			// 		<h3 className="content__header bg-primary">Список задач для {this.state.currentUser}</h3>
			// 		<div className="content__wrapper">
			// 			<TasksSearch onSearch={this.searchItem} />
			// 			<CreateTask getTaskList={this.getTaskList} submitHandler={addTask}/>
			// 			<TasksFilter onSortTasksAll={this.handleSortTasksAll} onSortTasksDone={this.handleSortTasksDone} onSortTasksUnComplete={this.handleSortTaskUnComplete}/>
			// 		</div>
			// 		<TasksDetails 
			// 			getTaskList={this.getTaskList} 
			// 			updateTask={updateTask} 
			// 			tasks={this.state.filterTasks} 
			// 			removeItem={this.removeItem} 
			// 			removeTask={deleteTask}
			// 		/>
					
			// 	</div>
			// 	<button className="btn btn-danger" onClick={this.handleRemoveUser}>Выйти</button>
			// </div>
// 			</>			
// 		)

// 	}

// }

// export default Dashboard;