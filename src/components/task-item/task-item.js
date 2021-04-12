import React from 'react';

import './task-item.css';

const TaskItem = ({task}) => {
	return (
		<>
			<span  className="list-item__text">{task.text}</span>
			<div className="action">
				<button className="action__button btn btn-info">
					<i className="fas fa-edit"></i>
				</button>
				<button className="action__button btn btn-info">
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</>
	)
};

export default TaskItem;

// export default class TaskItem extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			tasks: []
// 		}
// 	}
	
// 	componentDidMount() {
// 		let url = 'http://localhost:3000/tasks';
// 		fetch(url)
// 			.then(resp => resp.json())
// 			.then(data => {
// 				let tasks = data.map((item, index) => {
// 					return (
// 						<li id={item.id} key={index} className="list-item__item list-group-item">
// 							<span  className="list-item__text">{item.text}</span>
// 							<div className="action">
// 								<button className="action__button btn btn-info">
// 									<i className="fas fa-edit"></i>
// 								</button>
// 								<button className="action__button btn btn-info">
// 									<i className="fas fa-trash-alt"></i>
// 								</button>
// 							</div>
// 						</li>
// 					)
// 				})
// 				this.setState({tasks: tasks})
// 			})
// 	}

// 	render() {

// 		return (
// 		<>
// 			{this.state.tasks}
// 		</>
// 		)
// 	}
// }