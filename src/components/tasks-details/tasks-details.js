import React from 'react';
import TaskItem from './../task-item';

import './tasks-details.css';


const TasksDetails = ({tasks, deleteHandler}) => {
	const tasksList = tasks.map((el) => 
		<li key={el.id} className="list-item__item list-group-item">
			<TaskItem task={el} onDeleteClick={deleteHandler}/>
		</li>
	);
	return (
		<ul className="list list-group">
			{tasksList}
		</ul>
	)
};

export default TasksDetails;