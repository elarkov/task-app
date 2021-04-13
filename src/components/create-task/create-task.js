import React from 'react';
import { getTasks } from '../../api/server';

import './create-task.css';


const CreateTask = ({submitHandler, getTaskList}) =>  {

	const onSubmit = (evt) => {
		evt.preventDefault();

		const newTask = {
			text: evt.target.elements.text.value
		}

		submitHandler(newTask, getTaskList);
		evt.target.reset();

	}



	return(
		<div className="create-new">
			<form className="create-new__form" onSubmit={onSubmit}>
				<input 
					className="create-new__input form-control" 
					name="text" 
					type="text"
				/>
				<button className="create-new__button btn btn-success" type="submit">Добавить</button>
			</form>
		</div>
	)
}

export default CreateTask;