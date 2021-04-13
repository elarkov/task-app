import React from 'react';

import './task-item.css';

class TaskItem extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		}
	}

	deleteItem = () => {
		const {task, onDeleteClick, removeItem} = this.props;
		const id = task.id;

		onDeleteClick(id);
		removeItem(id);
	};


	render() {

		const {task, updateTask} = this.props;

		if (!this.state.isEdit) {

			return (
				<>
					<span className="list-item__text">{task.text}</span>
					<div className="action">
						<button className="action__button btn btn-info">
							<i className="fas fa-edit"></i>
						</button>
						<button className="action__button btn btn-info" onClick={this.deleteItem}>
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
				</>
			)
		} else {
			return (
				<form className="create-new__form" onSubmit={updateTask}>
				<input 
					className="create-new__input form-control" 
					name="text" 
					type="text"
				/>
				<button className="action__button btn btn-info">
					<i className="fas fa-edit"></i>
				</button>
			</form>
			)
		}
	}

};

export default TaskItem;