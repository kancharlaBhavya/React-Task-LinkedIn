import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
// import './DashboardPage.css';
import SkillDelete from "../Skills/SkillDelete";
import { useState } from "react";
import Addskills from "../Skills/Addskills";
import {  useReducer } from "react";
const DashboardPage = (props) => {
    const navigate=useNavigate('');
    const navigateto=()=>{
      navigate("/skill");
    }
    const redirectto=()=>{
      navigate("/profile");
    }
    const educationPage=()=>{
      navigate("/education");
    }
//name
const[name,setName]=useState('Kancharla sri Lakshmi ratna Bhavya')
const [nameEditing,setNameEditing]=useState(false);
const nameChange =(event)=>{
  setName(event.target.value);
};
const nameEdit=()=>{
  setNameEditing(true);
};
const NameDone=()=>{
  setNameEditing(false);
};

  
    //About 
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum nulla, lacinia id tempor sed, dapibus a urna. Nullam metus ante, imperdiet quis quam et, porta dictum massa. Vivamus semper iaculis imperdiet. In hac habitasse platea dictumst. Quisque quis hendrerit nunc, vitae semper ipsum. Aenean pulvinar ac leo vitae iaculis')

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
      setText(event.target.value);
    };
    const handleEdit = () => {
      setIsEditing(true);
    };
    const handleDone = () => {
      setIsEditing(false);
    };

    // exp
    const [experience, setExperience] = useState([
  
      'Techsophy - Associate Software Engineer'
  
    ]);
    const [newExperience, setNewExperience] = useState('');
    const handleExperienceSubmit = (e) => {
  
      e.preventDefault();
  
      setExperience([...experience, newExperience]);
  
      setNewExperience('');
  
    };
    const handleExperienceDelete = (index) => {
  
      const updatedExperience = [...experience];
  
      updatedExperience.splice(index, 1);
  
      setExperience(updatedExperience);
  
    };

    // education
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

    // skills
    const skillsReducer = (state, action) => {
      switch (action.type) {
        case "ADD_SKILL":
          return [...state, action.payload];
        case "DELETE_SKILL":
          return state.filter((skill, index) => index !== action.payload);
        default:
          return state;
      }
    };
    const [skills, dispatchSkills] = useReducer(skillsReducer, ["HTML", "CSS"]);
    const [newSkill, setNewSkill] = useState("");
  
    const handleSkillSubmit = (e) => {
      e.preventDefault();
      dispatchSkills({ type: "ADD_SKILL", payload: newSkill });
      setNewSkill("");
    };
  
    const handleSkillDelete = (index) => {
      dispatchSkills({ type: "DELETE_SKILL", payload: index });
    };

    return (
      <div className="dashboard" >
      <Navbar />
      <div className="body" style={{minHeight:'100vh'}}> 


{/* Profile img */}
  <div className="backGround-clr" >
       <div className="img1"> 
<img src="/backgroundimg1.png"  style={{borderRadius: "50%" , height:"150px" , width:"150px"}}></img>
       </div> 
       <div className="name"><h2>Kancharla Sri Lakshmi Ratna Bhavya</h2>   </div>
      </div>          

{/* About */}
<div className="about">
          <h1>About</h1>
          {isEditing ? (
            <textarea className="edit-textarea" value={text} onChange={handleChange} />
          ) : (
            <p className="display-text">{text}</p>
          )}
          {isEditing ? (
            <button className="done-button" onClick={handleDone}>
              Done
            </button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              <i className="fas fa-pencil-alt"></i> 
            </button>
          )}
        </div>

      
{/* Experience */}
<div className="profile-experience">
  <h3>Experience</h3>
  <ul>
    {experience.map((exp, index) => (
      <li key={index}>
        {exp}
        <button className="remove-button" onClick={() => handleExperienceDelete(index)}>
          &times;
        </button>
      </li>
    ))}
  </ul>
  <form onSubmit={handleExperienceSubmit}>
    <input
      type="text"
      placeholder="Add experience"
      value={newExperience}
      onChange={(e) => setNewExperience(e.target.value)}
      align="center"
    />
    <button className="add-button" type="submit" align="center">
      Add
    </button>
  </form>
</div>

{/* Education */}
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
</div>
{/* <button onClick={educationPage}>Education</button> */}
{/* Skills */}
<div className="profile-skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button className="remove-button" onClick={() => handleSkillDelete(index)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSkillSubmit}>
            <input
              type="text"
              placeholder="Add skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        {/* Add Skills
        <button onClick={navigateto}>Add</button>
profile
<button onClick={redirectto}>Profile</button> */}

</div>
</div>
    );
  };
export default DashboardPage;  