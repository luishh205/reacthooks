import {useState} from 'react'
import { usePrevous } from '../Hooks/usePrevous'

const HookCustom = () => {
const [number, setNumber] = useState(0);

const previousValue = usePrevous(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior {previousValue}</p>
      <button onClick={()=>setNumber(Math.random())}>Alterar!</button>
      <hr/>
    </div>
  )
}

export default HookCustom
