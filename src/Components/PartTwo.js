import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state={
      numberInput:0
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h1>Part Two!</h1>
        <h2> get your pokemon</h2>
        <h3>enter Pokemon number</h3>
        <input onChange={this.handleInput}value={this.state.numberInput} name='numberInput' type='number' style={{width:'40px'}} placeholder='#'/>
        <Link to={`/pokemon/${this.state.numberInput}`}><button>GO -></button></Link>
      </div>
    )
  }
};
