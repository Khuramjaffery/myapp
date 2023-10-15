import React from 'react'
import Child3 from './Child3'
function Child2({user}) {
  return (
    <>
   
    <div>the nmae is {user}</div>
    <Child3  user3={user}/>
    </>
  )
}

export default Child2