import React, { Component } from "react";

class SetstateExample extends Component
{
    constructor(props)
{
    super(props)

    this.state={
        name:"nams"
    }
}

  changeName()

{
    this.setState(
        {
            name:"chai"
        }
    )
    console.log(this.state.name);
}




    render()
    {
        return(
            
                <div>
                    <div>count is {this.state.name}</div>
                    <button onClick={()=>this.changeName()}> name</button>
                </div>

            
        )
    }
}
export default SetstateExample