import React from 'react'
import HookUseState from '../componets/HookUseState'
import HookUseReducer from '../componets/HookUseReducer'
import HookUseEffect from '../componets/HookUseEffect'

import { useContext } from 'react'
import { SomeContext } from '../componets/HookUseContext'
import HookUseRef from '../componets/HookUseRef'
import HookUseCallback from '../componets/HookUseCallback'
import HookUseMemo from '../componets/HookUseMemo'
import HookUseLayoutEffect from '../componets/HookUseLayoutEffect'
import HookUseImperativeHandle from '../componets/HookUseImperativeHandle'

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
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      <HookUseImperativeHandle/>
    </div>
  )
}

export default Home
