import React from 'react'

function New(props) {
    
    
    const ant=()=>{
        var a=[1,2,3];
    props.result2(a);
    }
    console.log(ant.a);
  return (
    <div>
      child component
      {ant}
    </div>
  )
}

export default New
