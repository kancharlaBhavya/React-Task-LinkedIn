import React, { useState } from 'react'
import './Addskills.css';

function Skillinput(props) {
    const[enteredValue,setEnteredValue]=useState('');
    const SkillInputChnage=event=>{
        setEnteredValue(event.target.value)
    }

    const formSubmit= event =>{
        event.preventDefault();
        props.onAddSkill(enteredValue);

    }
    
  return (
    <form onSubmit={formSubmit}>
        <div className="form-control">
            <label>Skills</label>
            <input type="text" onChange={SkillInputChnage}/>
        </div>
        <button type='submit'>Add Skill</button>
    </form>
  )
}

export default Skillinput;
