import React from 'react';

import './tasks-filter.css';

export default class TasksFilter extends React.Component {

	render() {
		return(
			<div className="ml-sm-2">
				<button className="btn btn-light">открытые</button>
				<button className="btn btn-light">завершенные</button>
			</div>
		)
	}
}