import React from 'react';
import { useState } from 'react';
import Profile from './profile';


function Education(props) {
   
    const [newEducation, setNewEducation] = useState('');

    const [education, setEducation] = useState([
  
     'Board of Intermediate Education,Ap',
  
      'Board of Secondary Education,AP'
  
    ]);
    const handleEducationSubmit = (e) => {
  
      e.preventDefault();
  
      setEducation([...education, newEducation]);
  
      setNewEducation('');
  
    };
    const handleEducationDelete = (index) => {
  
      const updatedEducation = [...education];
  
      updatedEducation.splice(index, 1);
  
      setEducation(updatedEducation);
  
    };
 
  return (

    <div className="profile-education">
  <h3>Education</h3>
  <ul>
    {education.map((edu, index) => (
      <li key={index}>
        {edu}
        <button className="remove-button" onClick={() => handleEducationDelete(index)}>
          &times;
        </button>
      </li>
    ))}
  </ul>
  <form onSubmit={handleEducationSubmit}>
    <input
      type="text"
      placeholder="Add education"
      value={newEducation}
      onChange={(e) => setNewEducation(e.target.value)}
    />
    <button type="submit">Add</button>
    
    
  </form>
  <Profile and={education}/>
 
 
</div>
  );

}

export default Education
