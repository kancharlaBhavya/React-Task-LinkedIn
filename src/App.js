// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './Pages/LoginPage';
// import DashboardPage from './Pages/DashboardPage';
// import Addskills from './Skills/Addskills';
// import { createContext } from 'react';
// import EducationForm from './trail/Edu';
// import DisplayPage from './trail/display';
// import Multiple from './trail/form';
// import Profile from './Pages/profile';
// import Education from './Pages/Education';
// import New from './Pages/new';

// export const store = createContext();

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/skill" element={<Addskills />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/new" element={<New />} />
//         <Route path="/displaypage" element={<DisplayPage />} />
//         <Route path="/multipage" element={<Multiple />} />
//         <Route path="/educationform" element={<EducationForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import DisplayPage from './UsingRedux/display';
import DashboardPage from './Pages/DashboardPage';
import EducationForm from './HomePAge/Education';
import SkillsForm from './HomePAge/Skills';
import ExperenceForm from './HomePAge/Experence';
import MainPage from './HomePAge/MainPAge';
import LoginPage from './Pages/LoginPage';
import ContactDetails from './Demo/Contact';
import HomePage from './Demo/Home';
import AboutPage from './Demo/AboutPage';
import DialogueBox from './Demo/Dialogue';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}    />    
        <Route path="/education" element={<EducationForm/>} />
        <Route path="/display" element={<DisplayPage/>} />
        <Route path="/skills" element={<SkillsForm/>}/>
        <Route path="/experence" element={<ExperenceForm/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path="/contact" element={<ContactDetails/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/dialogue" element={<DialogueBox/>}/>
      </Routes>
    </Router>
  );
};

export default App;
