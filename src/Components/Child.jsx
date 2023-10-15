import React from 'react'
import Child2 from './Child2'
function Child({abc}) {
  return (
    <div>
     mu name is :{abc} 
     <Child2  user={abc}/>
    </div>
  )
}

export default Child
