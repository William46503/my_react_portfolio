import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Project from "./Component/Projects";
import About from "./Component/About";
import Welcome from "./Component/Welcome";
import Navigation from "./Component/Navigation";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/project" componen={Project} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
