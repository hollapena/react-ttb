import React, { Component } from 'react'

export class text extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h3>Text will be shown above</h3>
      </div>
    )
  }
}

export default text
