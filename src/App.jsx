import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Welcome from './Sections/Welcome';
import Navigation from './Sections/Navigation';
import About from './Sections/About';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App main-container">
				<div className="navbar-container">
					<Navigation />
				</div>
				<div className="right-contrainer">
					<Welcome />
					<About />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
