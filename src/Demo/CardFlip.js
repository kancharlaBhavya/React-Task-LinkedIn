import React from 'react';
import './card.css'
import ContactDetails from './Contact';

const CardFlip = () => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/profile32.png" alt="Avatar" style={{ width: '200px', height: '200px' }} />
          </div>
          <div className="flip-card-back">
            <ContactDetails/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
