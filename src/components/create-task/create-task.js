import React from 'react';

import './create-task.css';


const CreateTask = ({submitHandler, getTaskList}) =>  {

	const onSubmit = (evt) => {
		evt.preventDefault();

		const id = localStorage.getItem('user_id');

		const newTask = {
			text: evt.target.elements.text.value,
			user_id: Number(id),
			isComplete: false
		}
		
		submitHandler(newTask, getTaskList);
		evt.target.reset();
	}



	return(
		<div className="create-new">
			<form className="create-new__form" onSubmit={onSubmit} autoComplete="off">
				<input 
					className="create-new__input form-control" 
					name="text" 
					type="text" required
					placeholder="Поехать в Японию"
				/>
				<button className="create-new__button btn btn-success" type="submit">Добавить</button>
			</form>
		</div>
	)
}

export default CreateTask;