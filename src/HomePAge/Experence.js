import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addExperience } from '../UsingRedux/action';
import "./Experence.css";
import { deleteExperience } from '../UsingRedux/action';

const ExperienceForm = () => {
  const experienceList = useSelector((state) => state.experienceList);

  const [experience, setExperience] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }
  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  const handleSave = () => {
    const newData = {
      experience,
    };

    dispatch(addExperience(newData));

    setExperience('');
  };

  return (
    <><div>
      <button onClick={navigateto}>Back</button>

      <h2>Experience Form</h2>
      <div>
        <label>Experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows={6}
          cols={50} />
      </div>
      <button onClick={handleSave}>Save </button>
    </div><div className="exp-div">
        <h2>Experience List</h2>
        {experienceList.length > 0 && (
          <>

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
      </div></>
  );
};

export default ExperienceForm;
