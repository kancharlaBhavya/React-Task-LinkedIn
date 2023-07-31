import React from 'react'

const skillitems=props=> {
    const deleteHandler= ()=>{
        props.onDelete(props.id);
    };
  return (
   <li className='Skill-items' onClick={deleteHandler}>
   {props.children}
   </li> 
  );
};
export default skillitems;
