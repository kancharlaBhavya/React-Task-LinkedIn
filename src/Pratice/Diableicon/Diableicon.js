import React, { useState } from 'react'

function Diableicon() {
    const [text1,setText1]=useState("");
    const [text2,setText2]=useState("");
    const handletext1event=(event)=>{
        setText1(event.target.value);
    };
    const handletext2event =(event)=>{
        setText2(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Text1</label>
            <input type="text" name="text1" placeholder="text1" onChange={handletext1event} value={text1}></input>
        </div>
        <div>
            <label>Text2</label>
            <input type="text" name="text2" placeholder="text2" onChange={handletext2event} value={text2}></input>
        </div>
        <button type='submit' disabled={!text1 || !text2}>button</button>
    </form>
  )
}

export default Diableicon;
