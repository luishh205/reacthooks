import {useState,useEffect,useMemo} from 'react'

const HookUseMemo = () => {

const [number, setNumber] = useState(0);

//const premiumNumbers = [ "0" , "100" , "200" ];

const premiumNumbers = useMemo(()=>{
   return [ "0" , "100" , "200" ];
},[])

useEffect(()=>{
    //console.log("foi alterado o premium number")
},[premiumNumbers]);

  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou</p> : "" }
      <hr />
    </div>
  )
}

export default HookUseMemo
