import React, { Component } from 'react'

export class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"namratha",
        age:24
         
      }
    }

    ChangeState()
    {
        this.setState(
            {
                name:"nams",
                age:25

            }
        )
        console.log(this.state.name)
        console.log(this.state.age)
    }
    
  render() {
    return (
      <div>
        <div> hai its {this.state.name}</div>
        <div> <button onClick={()=>this.ChangeState()}></button></div>
        
      </div>
    )
  }
}

export default SetState
