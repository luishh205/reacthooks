import {useEffect,useState} from 'react'

const HookUseEffect = () => {
    //useEffect sem dependecias
    useEffect(()=>{
        //console.log("estou sendo executado!")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //array de depd. vazio
    useEffect(() =>{
        //console.log("Array vazio apenas 1 vez")
    }, [])

    //array com itens de depd.
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() =>{
        if(anotherNumber > 0){
            //console.log("Array com dep. anotherNumber")
        }
    }, [anotherNumber]);

    //Cleanup do useeffect
    useEffect(()=>{
        const timer = setTimeout(()=>{
            //console.log("ola")
            //setAnotherNumber(anotherNumber + 1)
        },2000);

        return () => clearTimeout(timer)
    },[anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>anotherNumber Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
      <hr />
    </div>
  )
}

export default HookUseEffect
