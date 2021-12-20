import React, { Component } from 'react'

export class message extends Component {

  //variables go here

  constructor(props) {
    super(props)
    this.state = {
      words:'',
    }
    //binds go here
    this.handleClick = this.handleClick.bind(this)
  }

  //functions go here
handleClick() {
  this.props.handleMessage(this.state.words);
  this.state.words='';
}

  render() {
    //HTML goes here
    return (
      <div>
        <input
          id="textEntry"
          placeholder="Text Goes Here"
          type="text"
          value={this.state.words}
          onChange={(e) => this.setState({words: e.target.value})}
        ></input>
        <button onClick={this.handleClick}>Submit Text</button>
      </div>
    );
  }
}

export default message
