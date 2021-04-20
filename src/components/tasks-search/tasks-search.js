import React from 'react';

import './tasks-search.css';

export default class TasksSearch extends React.Component {

	render() {

		const {onSearch} = this.props;

		return(
			<div className="from-search form-inline my-2 my-lg-0">
				<button 
				className="form-search__btn btn btn-secondary my-2 my-sm-0">
					<i className="fas fa-search"></i>
				</button>
				<input 
					className="form-search__input form-control mr-sm-2" 
					type="search" 
					onChange={onSearch} 
					placeholder="Поиск"
				/>
			</div>
		)
	}
}