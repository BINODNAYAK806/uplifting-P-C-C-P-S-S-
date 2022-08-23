import React from 'react'
import Child from './Child';

export default function Ptoc() {
    
    const [count,setCount] = React.useState(0);
    const [count1,setCount1] = React.useState(10);


  return (
    <div>
    <h1>react parent to Child</h1>
    <p>{count}</p>
    <Child value={count} value1={count1} />
    <button onClick={()=>{setCount(count+1)}} >inc</button>
    <button onClick={()=>{setCount(count-1)}}>dec</button>
    </div>
  )
}
