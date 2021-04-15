import React from "react";

import {getTasks, addTask, updateTask, deleteTask} from '../api/server.js';
import CreateTask from '../components/create-task/create-task.js';
import TasksDetails from '../components/tasks-details/tasks-details.js';

import '../components/app/app.css';

export default class Dashboard extends React.Component {

	constructor() {
		super();

		this.state = {
			messageHeader: "Список задач",
			tasks: []
		}
	}

	getTaskList = () => {
		const id = localStorage.getItem('user_id');
		getTasks()
		.then((tasks) => {
			const items = tasks.filter((task) => task.user_id === Number(id));
			console.log(items);
			console.log(id);
			console.log(tasks);
			this.setState({
				tasks: items,
			})
		})
	}

	componentDidMount() {
		this.getTaskList();
	}


	removeItem = (id) => {
		this.setState({
			tasks: this.state.tasks.filter(item => item.id !== id)
		})
	}

	
 render() {
		return (
			<>
			<h3 className="bg-primary">{this.state.messageHeader}</h3>
			<CreateTask getTaskList={this.getTaskList} submitHandler={addTask}/>
			<TasksDetails 
				getTaskList={this.getTaskList} 
				updateTask={updateTask} 
				tasks={this.state.tasks} 
				removeItem={this.removeItem} 
				removeTask={deleteTask} 
			/>
			</>			
		)
	}

};