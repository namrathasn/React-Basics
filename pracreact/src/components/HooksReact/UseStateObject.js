import React,{useState} from 'react'

function UseStateObject() {
    const[name,setName]=useState({firstname:"",lastename:""})
  return (
    <form>
        <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}></input>
        <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}></input>
        <h2>first name is {name.firstname}</h2>
        <h2>first name is {name.lastname}</h2>
    </form>
  )
}

export default UseStateObject
