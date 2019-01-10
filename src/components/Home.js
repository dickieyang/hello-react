import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  render() {
	  console.log(this.props)
    return (
      <div className="home">
        Home

		<div>You name is {this.props.name},age is {this.props.age}</div>
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
