import React from 'react'
import { useState } from 'react';

const HookUseState = () => {
    
    //1 usestate 
    let userName = "Joao"
    const [name, setName] = useState("luis");
    
    const changeNames = () =>{
        userName = "luisinho";
        setName("Lucas");
    }
    //2 useState - input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age)
    }

  return (
    <div>
     {/* 1 useState */}
      <h2>useState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
      {/* 1 useState e input*/}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={age} 
        onChange={(e) => setAge(e.target.value)}/>
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} Anos!</p>
    <hr/>
    </div>
  )
}

export default HookUseState
