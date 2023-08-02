import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEducation, updateContact } from '../UsingRedux/action';
import { deleteEducation } from '../UsingRedux/action';



const ContactsForm = () => {
  const contactList = useSelector((state) => state.contactList);
  const [contact123, setContact123] = useState({
    Name:"",
    Email:"",
   
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateto=()=>{
    navigate('/home');
  }

  const handleSave = () => {
if(
  contact123.Name!== "" &&
  contact123.Email!== ""
){
    dispatch(updateContact(contact123));

    setContact123({ Name :" ",Email:""});
}
  };
  console.log(con.Name)

  return (
    <><div>
    

      <h2>Contact Form</h2>
      <div>
        <label><h3> Name:</h3></label>
        <textarea
          value={contact123.Name}
          // onChange={(e) => setEducation(e.target.value)} />
          onChange={(e) => {
            const Namename = e.target.value;
          
              setContact123({
                ...contact123,
                Name: Namename,
              });
            
          }}/>

      </div>

      {/* year */}
      <div>
        <label><h3>Email:</h3></label>
        <textarea className='textarea'
          value={contact123.Email}
          onChange={(e) => {
            const NewEmail = e.target.value;
              setContact123({
                ...contact123,
                Email: NewEmail,
              });
            
          }}/>

      </div>
      
      <button onClick={handleSave}>Save </button>
      {/* <button onClick={navigateto}>Done</button> */}
    </div><div>
      {/* edu list */}
        <h2>updated details</h2>

        {contactList.length > 0 && (
          <>

            <ul>
              {contactList.map((con, index) => (
                <li key={index}>
                
                  <p>{con.Name}</p>
                  <p>{con.Email}</p>
                  
                </li>
              ))}
            </ul>
          </>
        )}
        

      </div></>
  );
};

export default ContactsForm;
