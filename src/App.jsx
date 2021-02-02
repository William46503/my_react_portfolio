import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Sections/Welcome';
import Navigation from './Sections/Navigation';
import About from './Sections/About';
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

				{/* <Footer /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
