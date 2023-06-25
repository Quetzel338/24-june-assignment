import React from 'react'

function Output({submit}) {
  return (
    <div>
        <h1>{submit.name}</h1>
        <h1>{submit.age}</h1>
    </div>
  )
}

export default Output;
