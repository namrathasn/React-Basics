import React, { Component } from 'react'

export class StateClass extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            name:"namratha"
        }
    }

    
  render() {
    return (
      <div>
        <h1> hello {this.state.name}</h1>
      </div>
    )
  }
}

export default StateClass
