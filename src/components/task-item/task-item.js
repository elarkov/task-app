import React from 'react';

import './task-item.css';

const TaskItem = ({task, onDeleteClick}) => {

	const deleteItem = function() {
		const id = task.id;
		onDeleteClick(id);
	}

	return (
		<>
			<span className="list-item__text">{task.text}</span>
			<div className="action">
				<button className="action__button btn btn-info">
					<i className="fas fa-edit"></i>
				</button>
				<button className="action__button btn btn-info" onClick={deleteItem}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</>
	)
};

export default TaskItem;