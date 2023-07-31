// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
// import './DashboardPage.css';
import { Dialog } from "@mui/material";
import {DialogTitle} from "@mui/material";
import EducationForm from "../HomePAge/Education";
import './Home.css';
import SkillDelete from "../Skills/SkillDelete";
import { useState } from "react";
import Addskills from "../Skills/Addskills";
import {  useReducer } from "react";
import AboutPage from "./AboutPage";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
// import { deleteEducation, deleteExperience, deleteSkill } from './action'
import Navigation from "./NavBarNew";
import ExperienceForm from "../HomePAge/Experence";
import NavBarNew from "./NavBarNew";

const HomePage = (props) => {
    const navigate=useNavigate('');
    const [openBox,handleDisplay]=useState(false);

    const handleClose=()=>{
        handleDisplay(false);
    }
    const openDialgoueBox = ()=>{
        handleDisplay(true);
    }
    const buttonStyle = {
      width: "10rem",
      fontsize: "1.5rem",
      height: "2rem",
      padding: "5px",
      borderRadius: "10px",
      backgroundColor: "blue",
      color: "White",
      border: "2px solid yellow",
   };
    const navigatetoexp=()=>{
        navigate("/experence");
      }
      const navigatetoskill=()=>{
        navigate("/skills");
      }
// edu display
const educationList = useSelector((state) => state.educationList);
const experienceList = useSelector((state) => state.experienceList);
  const skillList = useSelector((state) => state.skillList);
const dispatch = useDispatch();

// const handleDeleteEducation = (index) => {
//   dispatch(deleteEducation(index));
// };
   
//name
const[name,setName]=useState('Kancharla sri Lakshmi ratna Bhavya')
// const [nameEditing,setNameEditing]=useState(false);


return (
      <div className="dashboard" >
      <NavBarNew  id ="nav-div"/>
      <div className="body" style={{minHeight:'100vh'}}> 


{/* Profile img */}
  <div className="backGround-clr">
       <div className="img1"  id="profile-home"> 
<img src="/logo512.png"  style={{borderRadius: "50%" , height:"150px" , width:"150px"}}></img>
       </div> 
       <div className="name"><h2>Kancharla Sri Lakshmi Ratna Bhavya</h2>   </div>
      </div> 
      {/* About */}
      <div className="About-page" id="about">
      <AboutPage/> 
      </div>    

      {/*  Educ*/}
      <div className="education-div">
        <h2>Education</h2>

        {educationList.length > 0 && (
          <>
            
            <ul>
              {educationList.map((edu, index) => (
                <li key={index}>
                  {edu.education}
                </li>
              ))}
            </ul>
          </>
        )}
                <button style={buttonStyle  } onClick={openDialgoueBox}>Edit</button>
                <Dialog onClose = {handleClose} open = {openBox}>
            <DialogTitle> Update Education </DialogTitle>
            <h3>
               <EducationForm/>
            </h3>
         </Dialog>

        </div>

{/* exp */}
<div className="exp-div">
<h2>Experience </h2>
{experienceList.length > 0 && (
          <>
            
            <ul>
              {experienceList.map((exp, index) => (
                <li key={index}>
                  {exp.experience}
                </li>
              ))}
            </ul>
            
                      </>
                      
        )}
        <button onClick={navigatetoexp}>Edit</button>
            </div>
{/* Skills */}
<div className="skill-div">
<h2>Skills</h2>
<div className="SkillsList">
{skillList.length > 0 && (
          <>
        
            <ul>
              {skillList.map((skill, index) => (
                <li key={index}>
                  {skill.skill}
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={navigatetoskill}>Edit</button>
            </div>
        </div>       

</div>
</div>
    );
  };
export default HomePage;  