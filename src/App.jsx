import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Sections/Welcome';
import Navigation from './Sections/Navigation';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App main-container">
				<Navigation />
				<Welcome />
				{/* <Footer /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
