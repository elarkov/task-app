import React from 'react';

import './tasks-filter.css';

export default class TasksFilter extends React.Component {



	render() {
		const {onSortTasksAll, onSortTasksDone, onSortTasksUnComplete} = this.props;

		return(
			<div className="ml-sm-2">
				<button className="btn btn-light" onClick={onSortTasksAll}>Все</button>
				<button className="btn btn-light" onClick={onSortTasksUnComplete}>Открытые</button>
				<button className="btn btn-light" onClick={onSortTasksDone}>Завершенные</button>
			</div>
		)
	}
}