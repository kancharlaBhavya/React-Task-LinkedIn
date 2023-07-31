import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteEducation, deleteExperience, deleteSkill } from './action'
import './display.css';
import Navbar from '../Pages/Navbar';

const DisplayPage = () => {
  const educationList = useSelector((state) => state.educationList);
  const experienceList = useSelector((state) => state.experienceList);
  const skillList = useSelector((state) => state.skillList);
  const dispatch = useDispatch();

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };
  const navigate=useNavigate();
  const BackPage=()=>{
    navigate("/main");
  }

  return (
    
    <>
    <Navbar/>
    <div className='backbutton'>
     
      <button onClick={BackPage}>Back</button>
      
    </div><div>
        <h2>Display Page</h2>

        {educationList.length > 0 && (
          <>
            <h3>Education:</h3>
            <ul>
              {educationList.map((edu, index) => (
                <li key={index}>
                  {edu.education}
                  <button onClick={() => handleDeleteEducation(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}

        {experienceList.length > 0 && (
          <>
            <h3>Experience:</h3>
            <ul>
              {experienceList.map((exp, index) => (
                <li key={index}>
                  {exp.experience}
                  <button onClick={() => handleDeleteExperience(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}

        {skillList.length > 0 && (
          <>
            <h3>Skills:</h3>
            <ul>
              {skillList.map((skill, index) => (
                <li key={index}>
                  {skill.skills}
                  <button onClick={() => handleDeleteSkill(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div></>
  );
};

export default DisplayPage;
