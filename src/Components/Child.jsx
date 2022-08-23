import React from 'react'

export default function Child(props) {

    const {value,value1} = props;
  return (
    <div>
    <h1>{value}</h1>
    <h1>{value1}</h1>
    </div>
  )
}
