import React from 'react';

import './create-task.css';


const CreateTask = ({submitHandler}) =>  {
	const onSubmit = function(evt) {
		evt.preventDefault();
		submitHandler(evt.target);
	}
	return(
		<div className="create-new">
			<form className="create-new__form" onSubmit={onSubmit}>
				<input className="create-new__input form-control" name="text" type="text"/>
				<button className="create-new__button btn btn-success" type="submit">Добавить</button>
			</form>
		</div>
	)
}

export default CreateTask;