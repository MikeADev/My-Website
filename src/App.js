import React from 'react';
import './App.css';
import SideNav from './SideNav';
import Home from './Home';
import BoingLetter from './BoingLetter'

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
      <SideNav />
      <Home createBoingLetters={this.createBoingLetters}/>
    </div>
    );
  }
}

export default App;