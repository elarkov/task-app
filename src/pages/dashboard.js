import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import {getTasks, addTask, updateTask, deleteTask} from '../api/server.js';
import CreateTask from '../components/create-task/create-task.js';
import TasksDetails from '../components/tasks-details/tasks-details.js';

import '../components/app/app.css';

export default class Dashboard extends React.Component {

	constructor() {
		super();

		this.state = {
			messageHeader: "Список задач",
			message: ['devid', 'jina'],
			tasks: [
				{
					id: '',
					text: ''
				}
			]
		}
	}

	getTaskList = () => {
		getTasks()
		.then((tasks) => {
			this.setState({
				tasks: tasks
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
			<div>
				<div className="wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<h3 className="bg-primary">{this.state.messageHeader}</h3>
								<CreateTask getTaskList={this.getTaskList} submitHandler={addTask}/>
								<TasksDetails updateTask={updateTask} tasks={this.state.tasks} removeItem={this.removeItem} removeTask={deleteTask} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

};