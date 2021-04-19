import React from 'react';
import TaskItem from './../task-item';

import './tasks-details.css';



const TasksDetails = ({tasks, removeTask, getTaskList, removeItem, updateTask}) => {

		const tasksList = tasks.map((el) => 
			<li key={el.id} className="list-item__item list-group-item">
				<TaskItem 
				getTaskList={getTaskList} 
				task={el} 
				removeItem={removeItem} 
				updateTask={updateTask} 
				onDeleteClick={removeTask}
			/>
			</li>
		);

		return (
			<ul className="list list-group">
				{tasksList}
			</ul>
		)
};

export default TasksDetails;