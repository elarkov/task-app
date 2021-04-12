import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import {getTasks, addTask} from '../api/server.js';
import CreateTask from '../components/create-task/create-task.js';
import TasksDetails from '../components/tasks-details/tasks-details.js';

import '../components/app/app.css';

export default class Dashboard extends React.Component {

	constructor() {
		super();
		this.state = {
			tasks: []
		}
	}

	componentDidMount() {
		 getTasks()
			.then((tasks) => {
				this.setState({
					tasks: tasks
				})
			})
	}
	
 render() {
		return (
			<div>
				<div className="wrapper">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<h3 className="bg-primary">Список задач</h3>
								<CreateTask submitHandler={addTask}/>
								<TasksDetails tasks={this.state.tasks}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};