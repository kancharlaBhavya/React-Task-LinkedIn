import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEducation,addExperience,addSkill } from '../UsingRedux/action';
import '../HomePAge/Main.css';
import Navbar from '../Pages/Navbar';

const MainPage = () => {
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSaveEducation = () => {
    const newData = {
      education,
    };
    dispatch(addEducation(newData));
    setEducation('');
  };

  const handleSaveExperience = () => {
    const newData = {
      experience,
    };
    dispatch(addExperience(newData));
    setExperience('');
  };

  const handleSaveSkills = () => {
    const newData = {
      skills,
    };
    dispatch(addSkill(newData));
    setSkills('');
  };

  const handleSaveAll = () => {
    handleSaveEducation();
    handleSaveExperience();
    handleSaveSkills();
    navigate('/display');
  };
  const BackPage=()=>{
    navigate("/dashboard");
  }
  return (
    <>
    <Navbar/>
    <button onClick={BackPage}>Back</button>
      <div>
        <h2>Education Form</h2>
        <div>
          <label>Education:</label>
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
           
          />
        </div>
        <button onClick={handleSaveEducation}>Save Education</button>
      </div>

      <div>
        <h2>Experience Form</h2>
        <div>
          <label>Experience:</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            
          />
        </div>
        <button onClick={handleSaveExperience}>Save Experience</button>
      </div>

      <div>
        <h2>Skills Form</h2>
        <div>
          <label>Skills:</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            
          />
        </div>
        <button onClick={handleSaveSkills}>Save Skills</button>
      </div>

      <button onClick={handleSaveAll}>Save All</button>
    </>
  );
};

export default MainPage;
