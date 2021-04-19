import React from 'react';

import './task-item.css';

class TaskItem extends React.Component { 

	constructor(props) {
		super(props);

		this.state = {
			isEdit: false,
			isComplete: false
		}
	}

	handleEditClick = () => {
		const {task} = this.props;

		this.setState({
			isEdit: true,
			value: task.text
		})
	};

	handleCancelEdit = () => {
		this.setState({
			isEdit: false
		})
	}

	handleSave = (evt) => {
		evt.preventDefault();

		const {task, updateTask, getTaskList} = this.props;
		const idUser = localStorage.getItem('user_id');

		const newTask = {
			id: task.id,
			text: evt.target.parentElement.elements.text.value,
			user_id: Number(idUser),
			isComplete: false
		};
		
		this.setState({
			isEdit: false,
		})

		updateTask(newTask.id, newTask, getTaskList);
	}

	onInputEditChange = (value) => {
		this.setState({
			value: value
		})
	}

	deleteItem = () => {
		const {task, onDeleteClick, removeItem} = this.props;
		const id = task.id;

		onDeleteClick(id);
		removeItem(id);
	};

	handleOnClickItem = () => {
		const {task, updateTask, getTaskList} = this.props;

		const currentState = this.state.isComplete;

		const newTask = {
			...task,
			isComplete: !task.isComplete
		}

		this.setState({
			isComplete: !currentState
		})

		updateTask(task.id, newTask, getTaskList);
	}

	render() {

		const {task, updateTask} = this.props;

		const styleLineThough = {
			textDecoration: this.state.isComplete ? "line-through" : null,
		}
		
		if (!this.state.isEdit) {

			return (
				<>
					<span className="list-item__text" style={styleLineThough}>
						{task.text}
					</span>
					
					<div className="action">
						<button className="action__button btn btn-info" onClick={this.handleOnClickItem}>
							<i className="fas fa-check"></i>
						</button>
						<button className="action__button btn btn-info" onClick={this.handleEditClick}>
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
					ref="editInput"
					value={this.state.value}
					onChange={e => this.onInputEditChange(e.target.value)}
				/>
				<button 
					className="action__button btn btn-info" 
					type="submit" 
					onClick={this.handleSave}
				>
					Добавить
				</button>
				<button 
					className="action__button btn btn-info" 
					type="submit" 
					onClick={this.handleCancelEdit}
				>
				 <i className="fas fa-times"></i>
				</button>
			</form>
			)
		}
	}

};

export default TaskItem;