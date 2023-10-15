
import Child from './Child';
import { useState } from 'react';

function Parent() {
    const[user,setUser]=useState("arslan")
  return (
  <Child abc={user}/>
  )
}

export default Parent
