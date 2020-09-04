import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Project from "./Projects";
import About from "./About";
import Welcome from "./Welcome";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path ="/" component ={Welcome}/>
      <Route path ="/about" component ={About}/>
      <Route path="/project" component ={Project} />
      <div className="navigation">
         <div className="navigation-sub">
           <div>
             <Link to="/" className="item">Welcome</Link>
           </div>
           <div>
             <Link to="/project" className="item">Projects</Link>
           </div>
           <div><Link to="/about" className="item">About</Link></div>
         </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
