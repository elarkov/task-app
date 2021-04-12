import React from "react";
import Dashboard from '../../pages/dashboard.js';

const App = () => {
	return (
		<Dashboard/>
	)
};

export default App;
// import React from "react";
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// // } from "react-router-dom";
// import getTasks from '../../api/server.js';
// import CreateTask from './../create-task';
// import TasksDetails from '../tasks-details';

// import './app.css';

// export default class App extends React.Component {

// 	constructor() {
// 		super();
// 		this.state = {
// 			tasks: []
// 		}
// 	}

// 	componentDidMount() {
// 		 getTasks()
// 			.then((tasks) => {
// 				this.setState({
// 					tasks: tasks
// 				})
// 			})
// 	}
	
//  render() {
// 		return (
// 			<div>
// 				<div className="wrapper">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-12">
// 							<h3 className="bg-primary">Список задач</h3>
// 								<CreateTask/>
// 								<TasksDetails tasks={this.state.tasks}/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// };