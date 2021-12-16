import './App.css';
import Message from './components/Message';
import Header from './components/Header'

import React, { Component } from 'react'

export class App extends Component {
  //Learn how to save state/variables
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
      <div>
        <Header message={this.state.message} />
        <Message message={this.state.message} handleMessage={this.handleMessage} />
      </div>
    );
  }
}


export default App;


/*
functional version of above
import {useState} from 'react';

function AppFunc() {
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