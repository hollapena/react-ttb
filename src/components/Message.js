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
  this.props.handleMessage(this.state.words)
}

  render() {
    //HTML goes here
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({words: e.target.value})}
        ></input>
        <button onClick={this.handleClick}>Submit Header</button>
      </div>
    );
  }
}

export default message
