import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import BoingLetter from './BoingLetter';
import SideNav from './SideNav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

class App extends React.Component {

  createBoingLetters = (message) => {
    let letters = message.split("");
    let boingLetters = letters.map((letter, i) => 
        <BoingLetter key={i} addBoing={this.addBoing} removeBoing={this.removeBoing} letter={letter} />)
    return boingLetters
  }

  addBoing = (e) => {
      e.target.className = "boing";
  }

  removeBoing = (e) => {
      e.target.className = "";
  }

  render() {
    return (
    <div className="App">
      <Router>
        <SideNav />
        <Switch>
          <Route exact path="/">
            <Home createBoingLetters={this.createBoingLetters}/>
          </Route>
          <Route path="/about">
            <About addBoing={this.addBoing} removeBoing={this.removeBoing} createBoingLetters={this.createBoingLetters}/>
          </Route>
          <Route path="/skills">
            <Skills addBoing={this.addBoing} removeBoing={this.removeBoing}/>
          </Route>
          <Route path="/portfolio">
            <h2>Portfolio</h2>
          </Route>
          <Route path="/contact">
            <Contact addBoing={this.addBoing} removeBoing={this.removeBoing} createBoingLetters={this.createBoingLetters}/>
          </Route>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;