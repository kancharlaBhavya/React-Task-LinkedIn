import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEducation } from '../UsingRedux/action';
import { deleteEducation } from '../UsingRedux/action';



const EducationForm = () => {
  const educationList = useSelector((state) => state.educationList);
  const [education, setEducation] = useState({
    University:"",
    Year:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };


  const handleSave = () => {
if(
  education.University!== "" &&
  education.Year!== ""
){
    dispatch(addEducation(education));

    setEducation({ University :"",Year:""});
}
  };

  return (
    <><div>
    

      <h2>Education Form</h2>
      <div>
        <label><h3>University Name:</h3></label>
        <textarea
          value={education.University}
          // onChange={(e) => setEducation(e.target.value)} />
          onChange={(e) => {
            const UniversityName = e.target.value;
            if (
              /^[A-Za-z0-9\s]+$/.test(UniversityName) ||
              UniversityName === ""
            ) {
              setEducation({
                ...education,
                University: UniversityName,
              });
            }
          }}/>

      </div>

      {/* year */}
      <div>
        <label><h3>Year:</h3></label>
        <textarea className='textarea'
          value={education.Year}
          onChange={(e) => {
            const PassedoutYear = e.target.value;
              setEducation({
                ...education,
                Year: PassedoutYear,
              });
            
          }}/>

      </div>
      
      <button onClick={handleSave}>Save </button>
      <button onClick={navigateto}>Done</button>
    </div><div>
      {/* edu list */}
        <h2>Education List</h2>

        {educationList.length > 0 && (
          <>

            <ul>
              {educationList.map((edu , index) => (
                <li key={index}>
                  <p>{edu.University}</p>
                  <p>{edu.Year}</p>
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
