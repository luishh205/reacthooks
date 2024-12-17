import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {

    //useRef
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(()=> {
        numberRef.current = numberRef.current + 1;
    });

  return (
    <div>
      <h2>UseRef</h2>
      <p>O componente renderizou : {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <p>Counter B: {counterB}</p>
      <button  onClick={()=>setCounter(counter + 1)}>Contator A</button>
      <button  onClick={()=>setCounterB(counterB + 1)}>Contator B</button>
      <hr/>
    </div>
  )
}

export default HookUseRef
