import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactDetails = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [contactData, setContactData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "(123) 456-7890",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = (formData) => {
    // Perform action to save the updated contact details, e.g., send to the server
    console.log(formData);

    // Update the contactData state with the edited formData
    setContactData(formData);

    // Switch back to view mode
    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <h6>My Contact Details
          <p>Name: {contactData.name}</p>
          <p>Email: {contactData.email}</p>
          <p>Phone Number: {contactData.phoneNumber}</p>
          <button onClick={handleEdit}>Edit</button></h6>
        </div>
      ) : (
        <div>
          <ContactForm onSave={handleSave} />
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      
    </div>

  );
};

export default ContactDetails;
