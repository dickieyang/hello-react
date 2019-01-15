import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

	constructor(){
		super();
		this.state = {
			homeLink: "Home"
		}
		console.log(this.state)
		//React components using ES6 classes no longer autobind this to non React methods. In your constructor,add
		this.changeHomeLink = this.changeHomeLink.bind(this)
	}
	//Or like this
	onGreet = (age) => {
		console.log(this.state);
		alert("hello js - " + age);
	}

	changeHomeLink(name) {
		console.log(this)
		this.setState({
			homeLink: name
		});
	}

	render() {
	const user = {
		name:"Anna",
		hobbies:["Sports","Shopping"]
	}
    return (
      <div className="App">
		<div>
		<Header homeLink={this.state.homeLink}/>
		</div>
		<div>
        hello react
		</div>
		<div>
		<Home name={"Max"} age={22} user={user} greet={this.onGreet} homeLink={this.changeHomeLink}>
			<p>I am a foolish</p>
		</Home>
		</div>
      </div>
    );
  }
}

export default App;
