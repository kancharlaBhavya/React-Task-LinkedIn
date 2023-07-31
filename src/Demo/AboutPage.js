import React from 'react';
import { useState } from 'react';

function AboutPage() {
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
return(
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
);
 
}

export default AboutPage;