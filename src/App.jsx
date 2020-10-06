import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Project from "./Component/Project";
import About from "./Component/About";
import Welcome from "./Component/Welcome";
import Navigation from "./Component/Navigation";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="main-container">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/project" component={Project} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
