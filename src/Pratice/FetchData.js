import React, { useState } from 'react';
import { useEffect } from 'react';


function FetchData() {
    const [data,setdata]=useState();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then
        (json => setdata(json));
    },[])

  return (
    <div>
      Fetch Page
      {data?.map((i,x) => <li key={i.id}>{i.id} {i.title}</li>)}
    </div>
  )
}

export default FetchData
