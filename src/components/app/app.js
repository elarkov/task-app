import React from "react";

import {
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from '../../pages/dashboard.js';
import Login from '../../pages/login.js';

const App = () => {
	return (
		<>
			<Switch>
				<Route path="/login">
					<Login/>
				</Route>
				<Route exact path="/">
					<Dashboard/>
				</Route>
			</Switch>
		</>
	)
};

export default App;
