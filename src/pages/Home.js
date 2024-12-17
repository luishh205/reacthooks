import React from 'react'
import HookUseState from '../componets/HookUseState'
import HookUseReducer from '../componets/HookUseReducer'
import HookUseEffect from '../componets/HookUseEffect'

import { useContext } from 'react'
import { SomeContext } from '../componets/HookUseContext'
import HookUseRef from '../componets/HookUseRef'

const Home = () => {

  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>UseContext</h2>
      <p>{contextValue}</p>
      <hr />
      <HookUseRef/>
    </div>
  )
}

export default Home
