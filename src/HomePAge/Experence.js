import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addExperience } from '../UsingRedux/action';
import "./Experence.css";
import { deleteExperience } from '../UsingRedux/action';

const ExperienceForm = () => {
  const experienceList = useSelector((state) => state.experienceList);

  const [experience, setExperience] = useState({
    Company:"",
    Position:"",
    Location:"",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }
  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  const handleSave = () => {
    if(experience.Company!== "" && experience.Position!=="" 
    && experience.Location!=="" ){
    dispatch(addExperience(experience));

    setExperience({Company:"",Position:"",Location:"",});
    }
  };

  return (
    <><div className='exp-form'>

      <h2>Experience Form</h2>
      <div>
        <label>Experience:</label>
        <textarea
          value={experience.Company}
          // onChange={(e) => setExperience(e.target.value)}
          onChange={(e) =>{
            const CompanyName =e.target.value;
            if (
              /^[A-Za-z0-9\s]+$/.test(CompanyName) ||
              CompanyName === ""
            ) {
              setExperience({
                ...experience,
                Company: CompanyName,
              });
            }
          }}
          />
      </div>
      <div>
        <label>Position:</label>
        <textarea
          value={experience.Position}
          // onChange={(e) => setExperience(e.target.value)}
          onChange={(e) =>{
            const PositionName =e.target.value;
            if (
              /^[A-Za-z0-9\s]+$/.test(PositionName) ||
              PositionName === ""
            ) {
              setExperience({
                ...experience,
                Position: PositionName,
              });
            }
          }}
          />
      </div>
      <div>
        <label>Location:</label>
        <textarea
          value={experience.Location}
          // onChange={(e) => setExperience(e.target.value)}
          onChange={(e) =>{
            const LocationName =e.target.value;
            if (
              /^[A-Za-z0-9\s]+$/.test(LocationName) ||
              LocationName === ""
            ) {
              setExperience({
                ...experience,
                Location: LocationName,
              });
            }
          }}
          />
      </div>
      <button onClick={handleSave}>Save </button>
      <button onClick={navigateto}>Done</button>

    </div><div className="experence-div">
        <h2>Experience List</h2>
        {experienceList.length > 0 && (
          <>
            <ul>
              {experienceList.map((exp, index) => (
                <li key={index}>
                  <p><u>Company:</u>{exp.Company}</p>
                  <p><u>Position:</u>{exp.Position}</p>
                  <p><u>Location:</u>{exp.Location}</p>
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
