import React, { useState } from 'react';
import Skillinput from './skillinput';
import Profile from '../Pages/profile';
import Skilllist from './skilllist';
import profile from '../Pages/profile';
import './Addskills.css';

const Addskills = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'text1', id: '1' },
    { text: 'text2', id: '2' }
  ]);
  const ans= courseGoals.map((x,index) =><li key= {index}> {x.text} <span onClick={() => deleteItemHandler(x.id)} style={{
    marginLeft: '10px',
    color: 'red',
    cursor: 'pointer',
  }}
>x
</span> </li>);  

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <Skilllist items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
const res=ans;
console.log(res);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh' }}>
      <div className='Skill'>
        <div className='Skill-box'>
          <section id="goal-form">
            <Skillinput onAddSkill={addGoalHandler} />
          </section>
          <section id="goals">
            {ans}
          </section>
        </div>
      </div>
      {/* Pass the courseGoals data as a prop to the Profile component */}
      {/* <Profile courseGoals={courseGoals} /> */}
  
    </div>
  );
 
};

export default Addskills;
