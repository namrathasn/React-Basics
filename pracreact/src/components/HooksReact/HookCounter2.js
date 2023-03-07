import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0
    const[count,setCount]= useState(initialCount)
  return (
    <div>
     <div> Count: {count} </div>
      <button onClick={()=>setCount(initialCount)}> reset</button>
      <button onClick={()=>setCount(count + 1)}> increment</button>
      <button onClick={()=>setCount(count - 1)}> Decrement</button>
    </div>
  )
}

export default HookCounter2
