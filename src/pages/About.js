import React from 'react'

import { useContext } from 'react'
import { SomeContext } from '../componets/HookUseContext'

const About = () => {

  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <p>{contextValue}</p>
    </div>
  )
}

export default About
