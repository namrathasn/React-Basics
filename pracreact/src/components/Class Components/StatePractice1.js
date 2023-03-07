import { Component } from "react";


class StatePractice1 extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:"namratha"
        }
    }

    changeName()
    {
        this.setState(
            {
                name:"namrathasn"

            }
        )
        console.log(this.state.name)
    }


    render()
    {
        return(
            <div>
                <div> name is {this.state.name}</div>
                <div><button onClick={()=>this.changeName()}>name</button></div>
            </div>
        )
    }
}

export default StatePractice1
