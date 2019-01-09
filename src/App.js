import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
		<div><Header/></div>
		<div>
        hello react
		</div>
		<div><Home/></div>
      </div>
    );
  }
}

export default App;
