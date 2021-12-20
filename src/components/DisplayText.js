import React, {Component} from 'react'
import Message from "./Message";
import Text from "./Text";

class DisplayText extends Component{
  constructor(props) {
    super(props) 
    this.state = {
      message: '',
    }
    this.handleMessage = this.handleMessage.bind(this)  //This line binds the "this" keyword when used with the handleMessage function to reference the App component
  }

  //Functions go here
  handleMessage(text){
    this.setState({
      message: text,
    })
  }


  render() {

    //HTML goes here
    return (
      <div className="App">
        <Text message={this.state.message} />
        <Message
            message={this.state.message}
            handleMessage={this.handleMessage}
          />
      </div>
    );
  }
}

export default DisplayText


/*
functional version of above
import {useState} from 'react';

function DisplayTextFunc() {
  const [message, useMessage] = useState('')

  function handleMessage(text) {
    setMessage(text)
  }

  return (
    <div>
    <header message
    </div>
  )
}
*/