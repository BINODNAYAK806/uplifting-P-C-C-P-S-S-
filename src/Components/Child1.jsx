import React from 'react'

export default function Child1({value,changedec,changeinc}) {
  return (
    <div>
        <p>child one</p>
      <h1>{value}</h1>  
    {/* <button onClick={changeinc}>inc</button>
    <button onClick={changedec}>dec</button> */}

    </div>
  )
}
