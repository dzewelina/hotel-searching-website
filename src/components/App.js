import React, { Component } from 'react';
import '../App.css';
import Hotels from './Hotels';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>HOTEL SEARCHING WEBSITE</h1>
        </header>
        <Hotels />
      </div>
    );
  }
}

export default App;