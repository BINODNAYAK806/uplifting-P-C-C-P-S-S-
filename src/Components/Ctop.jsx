import React from 'react'
import Child1 from './Child1';
import Stos from './Stos';


export default function Ctop() {

    const [count,setCount] = React.useState(0);

    const change =(value)=>{

        setCount(count+value)

    }

  return (
    <div>
        <h1>CHILD TO PARRENT</h1>
        <Child1 
        
        value={count}

        />
        <Stos test="INC" handleclick={()=>{change(1)}} />
        <Stos test="DEC" handleclick={()=>{change(-1)}} />
        
    </div>
  )
}
