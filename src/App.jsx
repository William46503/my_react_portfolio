import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './Component/Welcome';
import Navigation from './Component/Navigation';
import './App.css';

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
