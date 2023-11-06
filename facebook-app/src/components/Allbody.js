import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'


function Allbody() {
  return (
    <div className="flex w-[100vw] bg-cyan-50"> 
      <Left/>
      <Middle/>
      <Right/>
    </div>
  )
}

export default Allbody
