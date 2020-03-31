import React from 'react';
import './App.css';
import SideNav from './SideNav';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <SideNav />
      <div className="container">
        <Home />
      </div>
    </div>
    );
  }
}

export default App;