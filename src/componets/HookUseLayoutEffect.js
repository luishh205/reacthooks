import {useEffect,useState,useLayoutEffect} from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("luis");

    useEffect(()=>{
        //console.log("2");
        setName("mudou");
    }, []);

    useLayoutEffect(()=>{
        //console.log("1");
        setName("outro nome");
    }, []);

    //console.log(name)
  return (
    <div>
        <h2>UseLayoutEffect</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect