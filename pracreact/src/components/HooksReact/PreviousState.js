import React, { useState } from 'react'

function PreviousState() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    
    const incrementFive=()=>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount => prevCount + 1)

        }

    }
  return (
    <div>
     <div> Count: {count} </div>
      <button onClick={()=>setCount(initialCount)}> reset</button>
      <button onClick={()=>setCount(count + 1)}> increment</button>
      <button onClick={()=>setCount(count - 1)}> Decrement</button>
      <button onClick={incrementFive}>increment 5</button>
      
    </div>
  )
}
export default PreviousState
