import React from "react";
import ReactDOM from "react-dom";
import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header.js';
import Dashboard from './components/dashboard.js';



const App = () => {
  return (
		<div>
			<div className="wrapper">
				<Header/>
				<Router>
					<Switch>
						<Route path="/dashboard">
							<Dashboard/>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	)
};

ReactDOM.render(<App />, document.querySelector("#root"));
