import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
	const user = {
		name:"Anna",
		hobbies:["Sports","Shopping"]
	}
    return (
      <div className="App">
		<div><Header/></div>
		<div>
        hello react
		</div>
		<div>
		<Home name={"Max"} age={22} user={user}>
			<p>I am a foolish</p>
		</Home>
		</div>
      </div>
    );
  }
}

export default App;
