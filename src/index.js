import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app/app.js';


ReactDom.render(
	<Router>
		<div className="wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<App/>
						</div>
					</div>
				</div>
		</div>
	</Router>, 
	document.getElementById('root'));

