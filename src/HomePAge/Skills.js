// SkillsForm.js
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSkill } from '../UsingRedux/action';
import { deleteSkill } from '../UsingRedux/action';

const SkillsForm = () => {
  const [skill, setSkill] = useState('');
  const skillList = useSelector((state) => state.skillList);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }
  const handleDeleteSkill = (index) => {
    dispatch(deleteSkill(index));
  };
  const handleSave = () => {
    const newSkill = {
      skill,
    };

    dispatch(addSkill(newSkill));

    setSkill('');
    // navigate('/display'); 
  };

  return (
    <><div>
      <button onClick={navigateto}>Back</button>

      <h2>Skills Form</h2>
      <div>
        <label>Skill:</label>
        <textarea
          value={skill}
          onChange={(e) => setSkill(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div><div className="skill-div">
        <h2>Skills</h2>
        <div className="SkillsList">
          {skillList.length > 0 && (
            <>

              <ul>
                {skillList.map((skill, index) => (
                  <li key={index}>
                    {skill.skill}
                    <button onClick={() => handleDeleteSkill(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        </div></>
        );
        };

        export default SkillsForm;

