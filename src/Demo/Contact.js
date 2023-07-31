// ContactDetails.js

import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactDetails = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <h2>My Contact Details</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Phone Number: (123) 456-7890</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <ContactForm />
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
