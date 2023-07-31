import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEducation } from '../UsingRedux/action';
import { deleteEducation } from '../UsingRedux/action';



const EducationForm = () => {
  const educationList = useSelector((state) => state.educationList);

  const [education, setEducation] = useState('');
  const [PassedOut,setPassedOut]=useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };


  const handleSave = () => {
    const newData = {
      education,
      PassedOut
    };

    dispatch(addEducation(newData));

    setEducation('');
  };

  return (
    <><div>
    

      <h2>Education Form</h2>
      <div>
        <label><h3>University Name:</h3></label>
        <textarea
          value={education}
          onChange={(e) => setEducation(e.target.value)} />
          {/* <textarea value={PassedOut} onChange={(e) => setPassedOut(e.target.value)}/> */}
      </div>
      
      <button onClick={handleSave}>Save </button>
      <button onClick={navigateto}>Done</button>
    </div><div>
        <h2>Education List</h2>

        {educationList.length > 0 && (
          <>

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
        

      </div></>
  );
};

export default EducationForm;
