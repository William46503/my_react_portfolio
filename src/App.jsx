import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Sections/Welcome';
import Navigation from './Sections/Navigation';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div class="main-container">
					<Navigation />
					<Welcome />
					{/* <Footer /> */}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
