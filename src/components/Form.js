import React from 'react'
import {useState} from 'react'
import Output from './Output'

function Form() {
    const [name, setName] = useState("");
    const[age, setage] = useState("")
    const[submit, setSubmit] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmit([
           
        ])
        setName("");
        setage(" ")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter name' value={name}
        onChange={(e) => setName(e.target.value) } /><br></br>
        <input type='number' placeholder='enter age' value={age}
        onChange={(e) => setage(e.target.value)}/><br></br>
        <button type='submit'>submit</button>
      </form>
      {submit && <Output submit={submit} />}
    </div>
  )
}

export default Form
