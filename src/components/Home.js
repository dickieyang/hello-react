import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.age = props.age;
		this.state = {
			age:props.age
		}
	  }

	  onAdd() {
		this.age += 3;
		this.setState({
			age: this.state.age + 3
		});
		console.log(this.age);
	  }
	  handleGreet(){
		this.props.greet(this.age)
	  }
  render() {
	  console.log(this.props)
	  
    return (
      <div className="home">
        Home

		<div>You name is {this.props.name},age is {this.state.age}</div>
		<button onClick={() => {this.onAdd()}}>Click add</button>
		<hr/>
		<button onClick={this.handleGreet.bind(this)}>Greet </button>
		<h4>Hobbies</h4>
		<ul>
		{this.props.user.hobbies.map((hobby,i)  => <li key={i}>{hobby}</li>)}
		</ul>
		<div>
	  {this.props.children}
		</div>
      </div>
		
    );
  }
}

Home.propTypes = {
	name:PropTypes.string,
	age:PropTypes.number,
	children:PropTypes.element.isRequired
}
