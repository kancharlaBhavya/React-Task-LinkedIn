import React from 'react'
import Skillinput from './skillinput';
import skillitems from './skillitems';

const Skilllist=props=> {
  return (
    <ul className='skills-list'>
        {props.items.map(skill =>(
            <skillitems key={skill.id} id={skill.id} 
            onDelete={props.onDeleteSkill}>
               {skill.text}
            </skillitems>
        ))}
    </ul>
  );
};

export default Skilllist;
